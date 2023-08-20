import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dimmer, Loader, Button, Message } from "semantic-ui-react";
import { setGroupById } from "../../store/volunteeringSlice";

import "./view.css";
import List from "../../screens/choose/list";
import FilterVolunteer from "../filterAlbum/filterVolunteer";
import useHttp from "../../hooks/use-http";

const View = ({ setActiveItem }) => {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredData, setFilteredData] = useState(null);
  const { isLoading, sendRequest } = useHttp();
  const kindVolunteering = useSelector(
    (state) => state.kindVolunteer.itemSelected
  );
  const volunteeringsData = useSelector(
    (state) => state.volunteering.filteredItems
  );
  const user = useSelector((state) => state.user.user);
  const userId = user?._id;
  const [filterData, setFilterData] = useState({
    city: "",
    days_a_week: 1,
    min_time: 1,
    max_time: 24,
  });

  useEffect(() => {
    kindVolunteering &&
      console.log("kindVolunteering.id", kindVolunteering._id);
    kindVolunteering && dispatch(setGroupById(kindVolunteering._id));
  }, [kindVolunteering]);

  const onSearch = () => {
    const filteredData = volunteeringsData.filter((item) => {
      return (
        item.cityvolunteering === filterData.city &&
        item.numDayOfWeek <= filterData.days_a_week &&
        filterData.min_time <= item.duringTime &&
        item.duringTime <= filterData.max_time
      );
    });
    setFilteredData(filteredData);
  };

  const onClear = () => {
    setFilteredData(null);
  };

  const onSelect = (itemId) => {
    console.log("selectedItems", selectedItems);

    const isExist = selectedItems.find((id) => id === itemId);
    console.log("isExist", isExist);
    if (isExist) setSelectedItems(selectedItems.filter((id) => id !== itemId));
    else setSelectedItems([...selectedItems, itemId]);
  };

  const onSignIn = () => {
    setActiveItem("signUp");
    nav("/signIn");
  };

  const onSend = () => {
    console.log("onSend", selectedItems, userId);
    if (!userId) {
      return;
    }

    selectedItems.map((itemId) => {
      sendRequest(
        {
          url: "http://localhost:8000/volunteeringForVolunteer/addVolunteeringForVolunteer",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            idVolunteering: itemId,
            idVolunteer: userId,
            status: "waitingForOk",
          },
        },
        (data) => {
          console.log("detailes", data);
          setActiveItem("myVolunteering");
          nav("/myVolunteering");
        }
      );
    });
  };

  if (!kindVolunteering)
    return (
      <div className="empty">
        <div>
          <h1>No Volunterring selected</h1>
          <Button
            secondary
            style={{ marginLeft: "80px", marginTop: "30px" }}
            onClick={() => {
              setActiveItem("volunteering");
              nav("/volunteering");
            }}
          >
            Back to Volunteering list
          </Button>
        </div>
      </div>
    );

  const data = filteredData === null ? volunteeringsData : filteredData;

  return (
    <div className="container-fluid">
      <div class="polaroid">
        <img
          src={
            kindVolunteering.img ||
            "https://www.ruachtova.org.il/wp-content/uploads/2021/07/shutterstock_1487364161.jpg"
          }
          alt="Norther Lights"
          style={{ maxHeight: "400px", width: "100%" }}
        />
        <div class="container">
          <h1 style={{ fontWeight: "bold" }}>{kindVolunteering.titel}</h1>
          <p style={{ fontSize: "18px" }}>{kindVolunteering.detail}</p>
          <p style={{ fontSize: "18px", fontWeight: "600" }}>
            The min age is: {kindVolunteering.minAge}
          </p>
        </div>
      </div>
      <FilterVolunteer
        volunteerings={volunteeringsData}
        filterData={filterData}
        setFilterData={setFilterData}
        onSearch={onSearch}
        onClear={onClear}
      />
      {!userId && (
        <Message warning size="large" floating>
          <h4>For register to volunteering you need to connect your account</h4>
          <p>
            <Button secondary onClick={onSignIn}>
              Sign In your account
            </Button>
          </p>
        </Message>
      )}
      <List
        isLoading={isLoading}
        volunteerings={data}
        onSelect={onSelect}
        onSend={onSend}
        isDisabled={!userId}
      />
      {isLoading && (
        <Dimmer active inverted>
          <Loader size="large">Loading</Loader>
        </Dimmer>
      )}
    </div>
  );
};
export default View;
