import { useDispatch, useSelector } from "react-redux";
import { setkindVolunteerItems } from "../store/kindVolunteerSlice";

import useHttp from "./use-http";
import { setVolunteeringItems } from "../store/volunteeringSlice";
import { setUsers } from "../store/userSlice";
import { setUserVolunteeringItems } from "../store/userVolunteeringSlice";

export const useLoadData = () => {
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const allVolunteeringsData = useSelector((state) => state.volunteering.items);

  const loadKindVolunteersData = () => {
    sendRequest(
      {
        url: "http://localhost:8000/kindVolunteerings/getKindVolunteerings",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data) => {
        if (!data.error) {
          console.log("detailes", data);
          const filteredData = data.filter((item) => item.titel && item.detail);
          dispatch(setkindVolunteerItems(filteredData));
        }
      }
    );
  };

  const loadVolunteerings = () => {
    sendRequest(
      {
        url: "http://localhost:8000/volunteerings/getVolunteerings",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (volunteeringsData) => {
        dispatch(setVolunteeringItems(volunteeringsData));
      }
    );
  };

  const loadUsers = () => {
    sendRequest(
      {
        url: "http://localhost:8000/users/getUsers",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (usersData) => {
        dispatch(setUsers(usersData));
      }
    );
  };

  const getUserVolunteerings = (idVolunteer) => {
    sendRequest(
      {
        url: `http://localhost:8000/volunteeringForVolunteer/getVolunteeringForVolunteerByIdVolunteer/${idVolunteer}`,
        headers: {
          "Content-Type": "application/json",
        },
      },
      (userData) => {
        console.log("userData", userData);
        if (userData.length) {
          const updatedData = userData.map((item) => {
            const d = allVolunteeringsData.find(
              (volunteering) => volunteering._id === item.idVolunteering
            );
            console.log("1111111", item.status, d);
            return { ...d, ...item };
          });
          dispatch(setUserVolunteeringItems(updatedData));
        }
      }
    );
  };

  return {
    loadKindVolunteersData,
    loadVolunteerings,
    loadUsers,
    getUserVolunteerings,
  };
};
