import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  itemSelected: null
}

export const kindVolunteerSlice = createSlice({
  name: 'kindVolunteer',
  initialState,
  reducers: {
    setkindVolunteerItems: (state, action) => {
      state.items = action.payload;
    },
    setSelectedkindVolunteer: (state, action) => {
      state.itemSelected = action.payload;
    },
  },
})

export const { setkindVolunteerItems, setSelectedkindVolunteer } = kindVolunteerSlice.actions

export default kindVolunteerSlice.reducer