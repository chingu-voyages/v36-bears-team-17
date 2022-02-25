import { ReactElement, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useUserRegistrationMutation } from "../store/apiSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { signupField } from "../types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Alert from "@mui/material/Alert";
import { setCredentials } from "../store/auth/authSlice";

const signUpSchema = yup.object({
  displayName: yup.string().required("* Required Field"),
  username: yup
    .string()
    .required("* Required Field")
    .min(8, "Must be atleast 8 characters")
    .max(20, "Must be less than 20 characters")
    .matches(/^[A-Za-z0-9]*$/, "Only numbers or letters allowed"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("* Required Field"),
  password: yup
    .string()
    .required("* Required Field")
    .min(6, "Must be atleast 6 characters"),
});

export default function Signup(): ReactElement {
  const [registerUser, { isLoading }] = useUserRegistrationMutation();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signupField>({ resolver: yupResolver(signUpSchema) });
  const [apiError, setApiError] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<signupField> = async (credentials) => {
    setApiError("");

    try {
      const user = await registerUser(credentials).unwrap();
      dispatch(setCredentials(user));
      window.localStorage.setItem("token", JSON.stringify(user.token));
      window.localStorage.setItem("user", JSON.stringify(user.user));
      navigate("/home");
    } catch ({ data: { error } }) {
      setApiError(error as string);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        m: "0 auto",
      }}
    >
      {apiError && (
        <Alert severity="error">Username or Email already taken</Alert>
      )}
      <TextField
        variant="filled"
        label="Display name"
        autoComplete="off"
        {...register("displayName")}
        error={errors.displayName && true}
        helperText={errors.displayName?.message}
      />
      <TextField
        variant="filled"
        label="Username"
        autoComplete="off"
        {...register("username")}
        error={errors.username && true}
        helperText={errors.username?.message}
      />
      <TextField
        variant="filled"
        label="Email"
        autoComplete="off"
        {...register("email")}
        error={errors.email && true}
        helperText={errors.email?.message}
      />
      <TextField
        variant="filled"
        label="Password"
        autoComplete="off"
        {...register("password")}
        error={errors.password && true}
        helperText={errors.password?.message}
      />

      <Box sx={{ position: "relative" }}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          disabled={isLoading}
        >
          Create Account
        </Button>
        {isLoading && (
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
        )}
      </Box>
    </Box>
  );
}
