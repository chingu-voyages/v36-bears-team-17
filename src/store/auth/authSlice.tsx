import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  displayName: string;
  username: string;
  _id: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
}

const user: User = JSON.parse(localStorage.getItem("user") || "{}");
const token: string = JSON.parse(localStorage.getItem("token") || "{}");

const initialState: AuthState = {
  user: user ? user : null,
  token: token ? token : null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },
  },
});

export const { setCredentials } = slice.actions;

export default slice.reducer;
