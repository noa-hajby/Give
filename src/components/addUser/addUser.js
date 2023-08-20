import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Message, Radio } from "semantic-ui-react";
import useHttp from "../../hooks/use-http";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/userSlice";

const AddUser = ({ setActiveItem }) => {
  const dispatch = useDispatch();
  const [isFailed, setIsFailed] = useState(false);
  const { isLoading, error, sendRequest } = useHttp();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    userId: "",
    name: "",
    addres: "",
    city: "",
    phone: "",
    age: "",
    nameUser: "",
    passWord: "",
    IsMan: true,
    IsWoman: false,
  });

  const convertUserData = (userData) => {
    const { userId, age } = userData;

    return {
      ...userData,
      userId: Number(userId) || 0,
      age: Number(age) || 0,
    };
  };

  const onHandlerChange = (e, { name, value }) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
    console.log({ userData });
  };

  const onChangeGender = (e, { value }) => {
    if (value === "IsWoman")
      setUserData((prev) => ({ ...prev, IsWoman: true, IsMan: false }));
    else setUserData((prev) => ({ ...prev, IsWoman: false, IsMan: true }));
  };

  const checkIfAllFill = () => {
    const { email, name, addres, city, phone, age, nameUser, passWord } =
      userData;
    console.log(
      "check 12",
      email,
      name,
      email && name,
      email && name && addres && city && phone && age && nameUser && passWord
    );

    return (
      email && name && addres && city && phone && age && nameUser && passWord
    );
  };

  const onSignIn = () => {
    console.log("check", checkIfAllFill());
    if (!checkIfAllFill()) return;

    sendRequest(
      {
        url: "http://localhost:8000/users/addUser",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: convertUserData(userData),
      },
      (data) => {
        console.log("detailes", data);
        if (data.error) setIsFailed(true);
        else if (data.user) {
          const newUser = JSON.parse(data.user);
          console.log("newUser", newUser);
          dispatch(setUser(newUser));
          setActiveItem("volunteering");
          navigate("/volunteering");
        }
      }
    );
  };

  return (
    <div>
      <Form
        style={{
          padding: "30px",
          margin: "auto",
          width: "50%",
          marginTop: "50px",
          boxShadow: "rgba(0, 0, 0, 0.5) 0px 0px 10px 0px",
          backgroundColor: "white",
        }}
        loading={isLoading}
        error={error || isFailed}
      >
        <Form.Field
          required
          control={Input}
          name={"name"}
          value={userData.name}
          label="Full name"
          onChange={onHandlerChange}
        />
        <Form.Group widths="equal">
          <Form.Field
            required
            control={Input}
            name={"phone"}
            value={userData.phone}
            label="Phone"
            onChange={onHandlerChange}
          />
          <Form.Field
            required
            control={Input}
            name={"email"}
            value={userData.email}
            label="Email"
            onChange={onHandlerChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            required
            control={Input}
            name={"addres"}
            value={userData.addres}
            label="Addres"
            onChange={onHandlerChange}
          />
          <Form.Field
            required
            control={Input}
            name={"city"}
            value={userData.city}
            label="City"
            onChange={onHandlerChange}
          />
        </Form.Group>
        <Form.Field
          required
          control={Input}
          name={"age"}
          value={userData.age}
          label="Age"
          onChange={onHandlerChange}
        />
        <Form.Group widths="equal">
          <Form.Field
            required
            control={Input}
            name={"nameUser"}
            value={userData.nameUser}
            label="User Name"
            onChange={onHandlerChange}
          />
          <Form.Field
            required
            control={Input}
            name={"passWord"}
            value={userData.passWord}
            label="Password"
            onChange={onHandlerChange}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label="Male"
            value="IsMan"
            checked={userData.IsMan}
            onChange={onChangeGender}
          />
          <Form.Field
            control={Radio}
            label="Female"
            value="IsWoman"
            checked={userData.IsWoman}
            onChange={onChangeGender}
          />
        </Form.Group>
        <Message
          error
          content="Failed to sign up. Please make sure you fill all field and try again."
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Send"
          onClick={onSignIn}
        />
      </Form>
    </div>
  );
};

export default AddUser;
