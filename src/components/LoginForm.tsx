import { ReactElement, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useUserLoginMutation } from "../store/apiSlice";
import { useAppDispatch } from "../app/hooks";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Alert from "@mui/material/Alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFieldWithUsername } from "../types/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCredentials } from "../store/auth/authSlice";

function isEmail(str: string): boolean {
  return str.includes("@");
}

const loginSchema = yup.object({
  username: yup.string().required("* Required Field"),
  password: yup.string().required("* Required Field"),
});

export default function Login(): ReactElement {
  const [loginUser, { isLoading }] = useUserLoginMutation();
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

  const onSubmit: SubmitHandler<loginFieldWithUsername> = async (
    credentials
  ) => {
    setApiError("");
    let copyCredentials: any = { ...credentials };

    if (isEmail(copyCredentials.username)) {
      copyCredentials["email"] = copyCredentials.username;
      delete copyCredentials.username;
    }

    try {
      const user = await loginUser(copyCredentials).unwrap();
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
      <Box sx={{ position: "relative" }}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          size="large"
          disabled={isLoading}
        >
          Login
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
