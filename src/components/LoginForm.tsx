import React, { ReactElement } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "../utils/useForm";

export default function Login(): ReactElement {
  const { formState, handleChange } = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);

    // write logic for evaluting text and deciding if key is an email or username
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        m: "0 auto",
      }}
    >
      <TextField
        variant="filled"
        label="Username or Email"
        onChange={handleChange}
        value={formState.username}
        name="username"
      />
      <TextField
        variant="filled"
        label="Password"
        onChange={handleChange}
        value={formState.password}
        name="password"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
