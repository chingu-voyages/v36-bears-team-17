import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import PostCard from "./postCard/PostCard";
import PostForm from "./PostForm";
import { useFetchPostsQuery } from "../store/apiSlice";

export default function Home() {
  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useFetchPostsQuery();

  let content;

  if (isLoading) {
    content = (
      <CircularProgress
        size={30}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-12px",
          marginLeft: "-12px",
        }}
      />
    );
  } else if (isSuccess) {
    content = posts?.data.map((post: any) => (
      <PostCard key={post._id} post={post} />
    ));
  } else if (isError) {
    content = <Box> Error: {error}</Box>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxWidth: { xs: "600px" },
        width: { md: "600px" },
        margin: "0 auto",
      }}
    >
      <PostForm />
      {content}
    </Box>
  );
}
