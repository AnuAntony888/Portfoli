import React from "react";
import { useState, useEffect } from "react";
import { Drawer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Link from 'next/link'

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TableRow from "@mui/material/TableRow";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {navItems} from './Header'
const ResponsiveHeader = () => {
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <div>
      <IconButton onClick={() => setopenDrawer(!openDrawer)} sx={{float:'right'}}>
        <MenuIcon sx={{ color: "#CC9900" ,float:'right'}} />
      </IconButton>

      <Drawer
        open={openDrawer}
        onClose={() => setopenDrawer(false)}
        PaperProps={{
          sx: { width: "300px", bgcolor: "black", color: "#F4B52B" },
        }}
      >
        <List>
          <CloseIcon
            onClick={() => setopenDrawer(false)}
            sx={{ float: "right", marginRight: "10px" }}
          ></CloseIcon>
          
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "left" ,color:'#F4B52B'}}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        
      </Drawer>
    </div>
  );
};

export default ResponsiveHeader;

