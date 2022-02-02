import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  ListItemButton,
} from "@mui/material";
import Logo from "../Logo";
import { useNavigate, useLocation } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import HomeIcon from "@mui/icons-material/Home";

export const content = [
  {
    title: "Spaces",
    sections: [
      {
        name: "Home",
        path: "/home",
        icon: <HomeIcon />,
      },
    ],
  },
  {
    title: "Others",
    sections: [
      {
        name: "About",
        path: "/about",
        icon: <InfoIcon />,
      },
    ],
  },
];

export default function NavbarContent() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <Logo />

      <List>
        {content.map((category: any, idx) => {
          return (
            <Box key={category.title} sx={{ mt: "1rem" }}>
              <Typography
                variant="caption"
                color="textSecondary"
                sx={{ p: "0 0 0 1rem" }}
              >
                {category.title}
              </Typography>

              {category.sections.map((section: any) => (
                <ListItemButton
                  selected={location.pathname === section.path}
                  key={section.name}
                  onClick={() => navigate(section.path)}
                >
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText secondary={section.name} />
                </ListItemButton>
              ))}

              {idx < content.length - 1 && <Divider variant="middle" />}
            </Box>
          );
        })}
      </List>
    </>
  );
}
