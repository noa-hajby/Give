import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const userVolunteeringSlice = createSlice({
  name: "userVolunteering",
  initialState,
  reducers: {
    setUserVolunteeringItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setUserVolunteeringItems } = userVolunteeringSlice.actions;

export default userVolunteeringSlice.reducer;
