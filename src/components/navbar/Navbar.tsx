import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  TextField,
  IconButton,
  Avatar,
  Box,
  Drawer,
  Container,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarContent from "./NavbarContent";
import theme from "../../theme";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isDesktopMode = useMediaQuery(() => theme.breakpoints.up("md"));

  useEffect(() => {
    if (isDesktopMode) {
      setIsDrawerOpen(false);
    }
  }, [isDesktopMode]);

  return (
    <nav>
      <AppBar elevation={0} color="inherit">
        <Toolbar variant="dense">
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ display: { md: "none" } }}
              onClick={() => setIsDrawerOpen((prevState) => !prevState)}
            >
              <MenuIcon />
            </IconButton>
            <TextField size="small" placeholder="search" />
            <Avatar variant="rounded" />
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box sx={{ width: 200, height: "100%" }}>
          <NavbarContent />
        </Box>
      </Drawer>
    </nav>
  );
}
