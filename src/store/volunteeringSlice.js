import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  filteredItems: [],
  itemSelected: null
}

export const volunteeringSlice = createSlice({
  name: 'volunteering',
  initialState,
  reducers: {
    setVolunteeringItems: (state, action) => {
      state.items = action.payload;
    },
    setSelectedVolunteering: (state, action) => {
      state.itemSelected = action.payload;
    },
    setGroupById: (state, action) => {
      const id = action.payload;
      console.log('id', id)
      const d = state.items.filter((item) => {
        console.log('item.kindVolunteering == id', item, item.kindVolunteering, id, item.kindVolunteering == id)
        return item.kindVolunteering == id
      });
      console.log('filteredItems', d)

      state.filteredItems = d;
    },
  },
})

export const { setVolunteeringItems, setSelectedVolunteering, setGroupById } = volunteeringSlice.actions

export default volunteeringSlice.reducer