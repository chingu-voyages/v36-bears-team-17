import { ReactElement } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router";

export default function Logo(): ReactElement {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        p: "2rem 0",
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate("/home")}
    >
      <Typography>Icon and Logo name</Typography>
    </Box>
  );
}
