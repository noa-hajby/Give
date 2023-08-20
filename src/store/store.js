import { configureStore } from "@reduxjs/toolkit";
import kindVolunteerReducer from "./kindVolunteerSlice";
import userSlice from "./userSlice";
import volunteeringSlice from "./volunteeringSlice";
import userVolunteeringSlice from "./userVolunteeringSlice";

export const store = configureStore({
  reducer: {
    kindVolunteer: kindVolunteerReducer,
    user: userSlice,
    volunteering: volunteeringSlice,
    userVolunteering: userVolunteeringSlice,
  },
});
