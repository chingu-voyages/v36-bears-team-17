import { createSlice } from "@reduxjs/toolkit";

interface userState {
  displayName: string;
  username: string;
  _id: string;
}

const initialState: userState = {
  displayName: "",
  username: "",
  _id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { initUser } = userSlice.actions;

export default userSlice.reducer;
