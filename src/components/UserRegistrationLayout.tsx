import { ReactElement, useEffect, useState } from "react";
import { Box, Typography, Link } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import PlaceholderImg from "../assets/images/placeholderImg.png";

interface registrationType {
  title: string;
  label: string;
  btnText: string;
  sendTo: string;
}

const signup = {
  title: "Create Account",
  label: "Aready have an account?",
  btnText: "Login",
  sendTo: "/login",
};

const login = {
  title: "Login",
  label: "Don't have an account?",
  btnText: "Signup",
  sendTo: "/",
};

export default function UserRegistrationLayout(): ReactElement {
  const location = useLocation();
  const [{ title, label, btnText, sendTo }] = useState<registrationType>(
    location.pathname === "/login" ? login : signup
  );

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  return (
    <Box sx={{ display: { lg: "flex" } }}>
      <Box
        component="img"
        sx={{
          height: "100vh",
          width: "55%",
          objectFit: "cover",
          display: { xs: "none", lg: "block" },
        }}
        src={PlaceholderImg}
        alt="Background Image"
      />

      <Box
        sx={{
          m: { xs: "0 auto", lg: "0" },
          height: "100vh",
          p: "0 1rem",
          width: { md: "100%" },
          maxWidth: "500px",
        }}
      >
        <Typography
          paragraph
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: "1rem 0",
            gap: "0.5rem",
          }}
        >
          {label}
          <Box component="span">
            <Link underline="none" href={sendTo}>
              {btnText}
            </Link>
          </Box>
        </Typography>
        <Box
          sx={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            ml: { lg: "1rem" },
          }}
        >
          <Typography variant="h4" sx={{ mb: "4rem" }}>
            {title}
          </Typography>

          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
