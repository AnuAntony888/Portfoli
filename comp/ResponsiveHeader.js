import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { navData } from "./Header";
import { useAppTheme } from "../context/ThemeContext";

const ResponsiveHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { themeMode, toggleTheme } = useAppTheme();
  const isLight = themeMode === "light";

  return (
    <div>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="open navigation menu"
        sx={{
          bgcolor: isLight ? "rgba(217, 119, 6, 0.12)" : "rgba(244, 175, 27, 0.12)",
          border: isLight ? "1px solid rgba(217, 119, 6, 0.3)" : "1px solid rgba(244, 175, 27, 0.3)",
          color: isLight ? "#d97706" : "#f4af1b",
          "&:hover": {
            bgcolor: isLight ? "rgba(217, 119, 6, 0.22)" : "rgba(244, 175, 27, 0.25)",
          },
        }}
      >
        <MenuIcon sx={{ color: isLight ? "#d97706" : "#f4af1b" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "280px",
            bgcolor: isLight ? "#ffffff" : "#0f1016",
            color: isLight ? "#0f172a" : "#ffffff",
            borderLeft: isLight
              ? "1px solid rgba(217, 119, 6, 0.25)"
              : "1px solid rgba(244, 175, 27, 0.3)",
            p: 2,
            transition: "all 0.3s ease",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          {/* Quick theme toggle in mobile drawer */}
          <Button
            size="small"
            onClick={toggleTheme}
            startIcon={isLight ? <DarkModeIcon /> : <LightModeIcon />}
            sx={{
              color: isLight ? "#d97706" : "#f4af1b",
              bgcolor: isLight ? "rgba(217, 119, 6, 0.1)" : "rgba(244, 175, 27, 0.1)",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "0.8rem",
              fontWeight: 600,
              px: 1.5,
              border: isLight ? "1px solid rgba(217, 119, 6, 0.3)" : "1px solid rgba(244, 175, 27, 0.3)",
            }}
          >
            {isLight ? "Dark Theme" : "White Theme"}
          </Button>

          <IconButton
            onClick={() => setOpenDrawer(false)}
            sx={{
              color: isLight ? "#d97706" : "#f4af1b",
              bgcolor: isLight ? "rgba(217, 119, 6, 0.1)" : "rgba(244, 175, 27, 0.1)",
              "&:hover": {
                bgcolor: isLight ? "rgba(217, 119, 6, 0.2)" : "rgba(244, 175, 27, 0.2)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2, borderColor: isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.08)" }} />

        <List>
          {navData.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  borderRadius: "10px",
                  color: isLight ? "#334155" : "#e1e2e6",
                  "&:hover": {
                    bgcolor: isLight ? "rgba(217, 119, 6, 0.12)" : "rgba(244, 175, 27, 0.15)",
                    color: isLight ? "#d97706" : "#f4af1b",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;
