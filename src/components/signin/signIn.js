import "./signIn.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import { Form, Input, Button, Message } from "semantic-ui-react";
import { setUser } from "../../store/userSlice";

const SignIn = ({ setActiveItem }) => {
  const dispatch = useDispatch();

  const { isLoading, error, sendRequest } = useHttp();
  const [isFailed, setIsFailed] = useState(false);
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    passWord: "",
  });

  const onHandlerChange = (e, { name, value }) => {
    setSignInData((prev) => ({ ...prev, [name]: value }));
    console.log({ signInData });
  };

  const checkIfAllFill = () => {
    const { email, passWord } = signInData;
    console.log("check 13", email, passWord);
    console.log(email && passWord);
    return email && passWord;
  };

  const onSign = () => {
    console.log("check", checkIfAllFill());
    setIsFailed(false);
    if (!checkIfAllFill()) return;

    sendRequest(
      {
        url: `http://localhost:8000/users/tryLog/${signInData.email}/${signInData.passWord}`,
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data) => {
        console.log("isex", data.user, data.ans);
        if (data.ans) {
          console.log("arr");
          dispatch(setUser(data.user));
          setActiveItem("volunteering");
          navigate("/volunteering");
        } else {
          setIsFailed(true);
        }
      }
    );
  };

  const moveToSIgnIn = () => {
    setActiveItem("signUp");
    navigate("/signUp");
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
          name={"email"}
          value={signInData.email}
          label="Email"
          onChange={onHandlerChange}
        />
        <Form.Field
          required
          control={Input}
          name={"passWord"}
          value={signInData.passWord}
          label="PassWord"
          type="passWord"
          onChange={onHandlerChange}
        />
        <Message
          error
          content="Failed to sign in. Please make sure you fill all field and try again."
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Sign In"
          onClick={onSign}
        />
        <Form.Field
          id="form-button-control-public"
          control={Button}
          content="Create New"
          onClick={moveToSIgnIn}
        />
      </Form>
    </div>
  );
};
export default SignIn;
