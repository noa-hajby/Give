import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
})

export const { setUser, setUsers } = userSlice.actions

export default userSlice.reducer