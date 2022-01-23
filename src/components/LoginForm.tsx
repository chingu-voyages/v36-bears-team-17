import { ReactElement, useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useUserLoginMutation } from "../store/apiSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import { initUser } from "../store/user/userSlice";
import * as yup from "yup";
import Alert from "@mui/material/Alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFieldWithUsername } from "../types/types";
import { useForm, SubmitHandler } from "react-hook-form";

function isEmail(str: string): boolean {
  return str.includes("@");
}

const loginSchema = yup.object({
  username: yup.string().required("* Required Field"),
  password: yup.string().required("* Required Field"),
});

export default function Login(): ReactElement {
  const [loginUser, result] = useUserLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginFieldWithUsername>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<loginFieldWithUsername> = (credentials) => {
    setApiError("");
    let copyCredentials: any = { ...credentials };

    if (isEmail(copyCredentials.username)) {
      copyCredentials["email"] = copyCredentials.username;
      delete copyCredentials.username;
    }
    loginUser(copyCredentials)
      .unwrap()
      .then(({ token, user }) => {
        dispatch(initUser(user));
        window.localStorage.setItem("token", token);
        navigate("/home");
      })
      .catch(({ data: { error } }) => {
        setApiError(error);
      });
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
      {apiError && <Alert severity="error">{apiError}</Alert>}

      <TextField
        variant="filled"
        label="Username or Email"
        autoComplete="off"
        {...register("username")}
        error={errors.username && true}
        helperText={errors.username?.message}
      />
      <TextField
        autoComplete="off"
        variant="filled"
        label="Password"
        {...register("password")}
        error={errors.password && true}
        helperText={errors.password?.message}
      />
      <Button type="submit" variant="contained" size="large">
        Login
      </Button>
    </Box>
  );
}
