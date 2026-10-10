import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));

  function refreshPage() {
    window.location.href = "/";
  }

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "rgba(11, 12, 16, 0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(244, 175, 27, 0.25)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.6)",
        width: "100%",
        zIndex: 1100,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 1.5, sm: 3, md: 5 }, minHeight: { xs: 58, sm: 64 } }}>
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
              borderRadius: "50%",
              overflow: "hidden",
              width: { xs: 36, sm: 44 },
              height: { xs: 36, sm: 44 },
              border: "2px solid #f4af1b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#1a1c24",
              flexShrink: 0,
            }}
          >
            <Image
              src="/logo.jpg"
              width={44}
              height={44}
              alt="Anu Antony Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box sx={{ textAlign: "left" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                fontSize: { xs: "0.95rem", sm: "1.1rem" },
                letterSpacing: "0.5px",
              }}
            >
              ANU <span style={{ color: "#f4af1b" }}>ANTONY</span>
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#aaa",
                fontSize: { xs: "0.65rem", sm: "0.72rem" },
                letterSpacing: "0.8px",
                display: "block",
              }}
            >
              React.js Developer
            </Typography>
          </Box>
        </Box>

        {matches ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.8 }}>
            {navData.map((item) => (
              <Button
                key={item.label}
                component={Link}
                href={item.href}
                sx={{
                  color: "#dcdde1",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textTransform: "none",
                  px: 1.5,
                  borderRadius: "8px",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    color: "#f4af1b",
                    backgroundColor: "rgba(244, 175, 27, 0.1)",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        ) : (
          <ResponsiveHeader />
        )}
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
