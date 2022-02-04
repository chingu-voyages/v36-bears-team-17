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

        <Grid container spacing={3} sx={{ p: { md: "0 1rem" } }}>
          <Grid item md={"auto"} sx={{ display: { xs: "none", md: "block" } }}>
            <DesktopNavbar />
          </Grid>
          <Grid item xs={12} md={"auto"}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
