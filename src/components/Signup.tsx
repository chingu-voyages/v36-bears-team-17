import { ReactElement, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useUserRegistrationMutation } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { initUser } from "../store/user/userSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupField } from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "@mui/material/Alert";

const loginSchema = yup.object({
  displayName: yup.string().required("* Required Field *"),
  username: yup
    .string()
    .required("* Required Field *")
    .min(8, "Must be atleast 8 characters")
    .matches(/^[A-Za-z0-9]*$/, "Only numbers or letters allowed"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("* Required Field *"),
  password: yup
    .string()
    .required("* Required Field *")
    .min(6, "Must be atleast 6 characters"),
});

export default function Signup(): ReactElement {
  const [registerUser, result] = useUserRegistrationMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signupField>({ resolver: yupResolver(loginSchema) });
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<signupField> = (data) => {
    setApiError("");

    registerUser(data)
      .unwrap()
      .then(({ token, user }) => {
        dispatch(initUser(user));
        window.localStorage.setItem("token", token);
        navigate("/");
      })
      .catch(({ data }) => {
        setApiError(data.error);
      });
  };
  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      {apiError && (
        <Alert severity="error">Username or Email already taken</Alert>
      )}
      <TextField
        label="Display name"
        autoComplete="off"
        {...register("displayName")}
        error={errors.displayName && true}
        helperText={errors.displayName?.message}
      />
      <TextField
        label="Username"
        autoComplete="off"
        {...register("username")}
        error={errors.username && true}
        helperText={errors.username?.message}
      />
      <TextField
        label="Email"
        autoComplete="off"
        {...register("email")}
        error={errors.email && true}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        autoComplete="off"
        {...register("password")}
        error={errors.password && true}
        helperText={errors.password?.message}
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
}
