import { Box, Container, Toolbar, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import DesktopNavbar from "./navbar/DesktopNavbar";

export default function AppLayout() {
  return (
    <Box>
      <Navbar />
      <Container
        maxWidth="lg"
        sx={{
          "&.MuiContainer-root": {
            p: "0",
          },
        }}
      >
        <Toolbar />
        <DesktopNavbar />

        <Outlet />
      </Container>
    </Box>
  );
}
