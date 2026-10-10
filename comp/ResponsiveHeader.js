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
import Link from "next/link";
import { navData } from "./Header";

const ResponsiveHeader = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        aria-label="open navigation menu"
        sx={{
          bgcolor: "rgba(244, 175, 27, 0.12)",
          border: "1px solid rgba(244, 175, 27, 0.3)",
          "&:hover": { bgcolor: "rgba(244, 175, 27, 0.25)" },
        }}
      >
        <MenuIcon sx={{ color: "#f4af1b" }} />
      </IconButton>

      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: "280px",
            bgcolor: "#0f1016",
            color: "#ffffff",
            borderLeft: "1px solid rgba(244, 175, 27, 0.3)",
            p: 2,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton
            onClick={() => setOpenDrawer(false)}
            sx={{
              color: "#f4af1b",
              bgcolor: "rgba(244, 175, 27, 0.1)",
              "&:hover": { bgcolor: "rgba(244, 175, 27, 0.2)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navData.map((item) => (
            <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={item.href}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  borderRadius: "10px",
                  color: "#e1e2e6",
                  "&:hover": {
                    bgcolor: "rgba(244, 175, 27, 0.15)",
                    color: "#f4af1b",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    fontSize: "1rem",
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
