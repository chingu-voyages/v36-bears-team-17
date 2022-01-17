import React, { ReactElement } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useForm } from "../utils/useForm";

export default function Login(): ReactElement {
  const { formState, handleChange } = useForm({
    text: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
    // write logic for evaluting text and deciding if key is an email or username
  };
  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Username or Email"
        onChange={handleChange}
        value={formState.text}
        name="text"
      />
      <TextField
        label="Password"
        onChange={handleChange}
        value={formState.password}
        name="password"
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
}
