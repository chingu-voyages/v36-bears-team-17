import { Drawer, Box } from "@mui/material";
import NavbarContent from "./NavbarContent";

export default function DesktopNavbar() {
  const drawerWidth = 200;
  return (
    <nav>
      <Box
        sx={{
          width: drawerWidth,
          height: "auto",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "0 0 15px 15px",
        }}
      >
        <NavbarContent />
      </Box>
    </nav>
  );
}
