import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signupField,
  registerResponse,
  loginFieldWithEmail,
  loginFieldWithUsername,
  postField,
  postObj,
} from "../types/types";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_BASE_URL,
  prepareHeaders: (headers) => {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    userRegistration: builder.mutation<registerResponse, signupField>({
      query: (userInput) => ({
        url: "api/auth/register",
        method: "POST",
        body: userInput,
      }),
    }),
    userLogin: builder.mutation<
      registerResponse,
      loginFieldWithEmail | loginFieldWithUsername
    >({
      query: (userInput) => ({
        url: "api/auth/login",
        method: "POST",
        body: userInput,
      }),
    }),
    createPost: builder.mutation<postObj, postField>({
      query: (postInput) => ({
        url: "api/post/",
        method: "POST",
        body: postInput,
      }),
      invalidatesTags: ["Posts"],
    }),
    fetchPosts: builder.query<{ data: postObj[] }, void>({
      query: () => "api/post/",
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useUserRegistrationMutation,
  useUserLoginMutation,
  useCreatePostMutation,
  useFetchPostsQuery,
} = apiSlice;
