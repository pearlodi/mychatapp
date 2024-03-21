import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      return [...state, action.payload];
    }
  },
});


export const { setUser, addUser } = userSlice.actions;

export default userSlice.reducer;

export async function fetchUsers() {
  const response = await fetch('https://api.example.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

