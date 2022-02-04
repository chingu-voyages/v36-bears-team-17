import { Box, Paper } from "@mui/material";
import NavbarContent from "./NavbarContent";

export default function DesktopNavbar() {
  const drawerWidth = 200;
  return (
    <nav>
      <Box
        sx={{
          width: drawerWidth,
          height: "auto",
        }}
      >
        <Paper>
          <NavbarContent />
        </Paper>
      </Box>
    </nav>
  );
}
