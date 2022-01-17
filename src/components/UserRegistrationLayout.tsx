import { ReactElement } from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import PlaceholderImg from "../assets/images/placeholderImg.png";

export default function UserRegistrationLayout(): ReactElement {
  return (
    <Box sx={{ display: "flex" }}>
      <img src={PlaceholderImg} alt="Background Image" />
      <Outlet />
    </Box>
  );
}
