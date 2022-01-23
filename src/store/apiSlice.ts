import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signupField,
  registerResponse,
  loginFieldWithEmail,
  loginFieldWithUsername,
} from "../types/types";

export const apiSlice = createApi({
  reducerPath: "apiCall",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL || `http://localhost:5002/api`,
    prepareHeaders: (headers) => {
      if (localStorage.getItem("token")) {
        headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    userRegistration: builder.mutation<registerResponse, signupField>({
      query: (userInput) => ({
        url: "/auth/register",
        method: "POST",
        body: userInput,
      }),
    }),
    userLogin: builder.mutation<
      registerResponse,
      loginFieldWithEmail | loginFieldWithUsername
    >({
      query: (userInput) => ({
        url: "/auth/login",
        method: "POST",
        body: userInput,
      }),
    }),
  }),
});

export const { useUserRegistrationMutation, useUserLoginMutation } = apiSlice;
