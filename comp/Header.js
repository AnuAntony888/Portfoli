import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("lg"));
  console.log(matches, "matches");
  function refreshPage() {
    window.location.href = "/";
  }

  const [navactive, setNavactive] = useState("#");
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: "black",
          color: "white",

          width: "100%",

          justifyContent: "space-between",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {matches ? (
            <>
   
              <Image
                src={"/logo.jpg"}
                width={150}
                height={150}
                onClick={refreshPage}
              />
              <Box>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#F4B52B" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </>
          ) : (
            <>
              <Image
                src={"/logo.jpg"}
                width={150}
                height={100}
                onClick={refreshPage}
              />

              <ResponsiveHeader />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
export const navItems = [<Link href="#">Home</Link>,<Link href="#aboutme">About Me</Link>,
<Link href="#technicalskills">Technical skills</Link>,
<Link href="#services">Services</Link>,
<Link href="#project">Project</Link>,
<Link href="#testmonials">Testmonials</Link>,

<Link href="#contactme">Contact Me</Link>,


];
