import { ReactElement } from "react";
import { Box, TextField, Button, Typography, Link } from "@mui/material";
import { useUserRegistrationMutation } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { initUser } from "../store/user/userSlice";
import { useForm } from "../utils/useForm";

export default function Signup(): ReactElement {
  const [registerUser, result] = useUserRegistrationMutation();
  const { formState, handleChange } = useForm({
    displayName: "",
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    registerUser(formState)
      .unwrap()
      .then(({ token, user }) => {
        console.log(token, user);
        dispatch(initUser(user));
        window.localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch(({ data: { error } }) => {
        console.log(error);
      });
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
        label="Display name"
        onChange={handleChange}
        value={formState.displayName}
        name="displayName"
      />
      <TextField
        variant="filled"
        label="Username"
        onChange={handleChange}
        value={formState.username}
        name="username"
      />
      <TextField
        variant="filled"
        label="Email"
        onChange={handleChange}
        value={formState.email}
        name="email"
      />
      <TextField
        variant="filled"
        label="Password"
        onChange={handleChange}
        value={formState.password}
        name="password"
      />

      <Button type="submit" variant="contained" fullWidth>
        Create Account
      </Button>
    </Box>
  );
}
