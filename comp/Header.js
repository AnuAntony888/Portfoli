import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ResponsiveHeader from "./ResponsiveHeader";
import { useAppTheme } from "../context/ThemeContext";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  const { themeMode, toggleTheme } = useAppTheme();

  function refreshPage() {
    window.location.href = "/";
  }

  const isLight = themeMode === "light";

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: isLight ? "rgba(255, 255, 255, 0.92)" : "rgba(11, 12, 16, 0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: isLight
          ? "1px solid rgba(217, 119, 6, 0.22)"
          : "1px solid rgba(244, 175, 27, 0.25)",
        boxShadow: isLight
          ? "0 4px 20px rgba(15, 23, 42, 0.06)"
          : "0 4px 20px rgba(0, 0, 0, 0.6)",
        width: "100%",
        zIndex: 1100,
        transition: "all 0.3s ease",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1.5, sm: 3, md: 5 }, minHeight: { xs: 58, sm: 64 } }}>
        {/* Brand / Logo (Monogram Badge without image) */}
        <Box
          onClick={refreshPage}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, sm: 1.5 },
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              borderRadius: "12px",
              width: { xs: 38, sm: 44 },
              height: { xs: 38, sm: 44 },
              background: isLight
                ? "linear-gradient(135deg, #d97706 0%, #b45309 100%)"
                : "linear-gradient(135deg, #f4af1b 0%, #d97706 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              color: isLight ? "#ffffff" : "#0b0c10",
              boxShadow: isLight
                ? "0 4px 14px rgba(217, 119, 6, 0.3)"
                : "0 4px 14px rgba(244, 175, 27, 0.35)",
              flexShrink: 0,
              letterSpacing: "-0.5px",
              userSelect: "none",
            }}
          >
            AA
          </Box>
        </Box>

        {/* Navigation & Controls */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {matches && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mr: 1 }}>
              {navData.map((item) => (
                <Button
                  key={item.label}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: isLight ? "#334155" : "#dcdde1",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    textTransform: "none",
                    px: 1.5,
                    borderRadius: "8px",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      color: isLight ? "#d97706" : "#f4af1b",
                      backgroundColor: isLight
                        ? "rgba(217, 119, 6, 0.08)"
                        : "rgba(244, 175, 27, 0.1)",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Theme Switcher Toggle (White Theme / Dark Theme) */}
          <Tooltip title={isLight ? "Switch to Dark Mode" : "Switch to White Theme"}>
            <IconButton
              onClick={toggleTheme}
              aria-label="Toggle white or dark theme"
              sx={{
                bgcolor: isLight
                  ? "rgba(217, 119, 6, 0.12)"
                  : "rgba(244, 175, 27, 0.12)",
                border: isLight
                  ? "1px solid rgba(217, 119, 6, 0.3)"
                  : "1px solid rgba(244, 175, 27, 0.3)",
                color: isLight ? "#d97706" : "#f4af1b",
                width: 40,
                height: 40,
                transition: "all 0.3s ease",
                "&:hover": {
                  bgcolor: isLight
                    ? "rgba(217, 119, 6, 0.2)"
                    : "rgba(244, 175, 27, 0.25)",
                  transform: "rotate(15deg)",
                },
              }}
            >
              {isLight ? (
                <DarkModeIcon sx={{ fontSize: "1.25rem" }} />
              ) : (
                <LightModeIcon sx={{ fontSize: "1.25rem" }} />
              )}
            </IconButton>
          </Tooltip>

          {/* Mobile Menu Drawer Toggle */}
          {!matches && <ResponsiveHeader />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

export const navData = [
  { label: "Home", href: "#" },
  { label: "About Me", href: "#aboutme" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#technicalskills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#project" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contactme" },
];

export const navItems = navData.map((item) => (
  <Link key={item.label} href={item.href}>
    {item.label}
  </Link>
));
