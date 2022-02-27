import { ReactElement } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";
import logo from "../assets/images/logo.png";

export default function Logo(): ReactElement {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: "1.5rem 0",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        alignItems: "center",
      }}
      onClick={() => navigate("/home")}
    >
      <Box component="img" src={logo} sx={{ width: "50px" }} />
      <Typography>Postr</Typography>
    </Box>
  );
}
