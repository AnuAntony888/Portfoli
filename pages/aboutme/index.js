import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../../styles/About.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import WorkIcon from "@mui/icons-material/Work";
import { VscFolderLibrary } from "react-icons/vsc";
import { AboutCard, TypographyText } from "../Reuse/Reuse";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import Image from "next/image";
const Aboutme = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  const isSmallScreen2 = useMediaQuery("(max-width:400px)");
  return (
    <div id="aboutme">
      <Box sx={{ flexGrow: 1, marginTop: "100px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TypographyText
              Typography={"ABOUT ME"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
          <Grid item xs={12}>
            <img
              src="/about.png"
              className={styles.aboutimg}
              width={isSmallScreen ? (isSmallScreen2 ? "50%" : "60%") : ""}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={10}
          sx={{ pl: "15%", pr: "15%", pt: "5%", pb: "10%" }}
        >
          {Data.map((data, index) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <AboutCard
                IconButtoncontent={data.IconButtoncontent}
                Typography={data.Typography}
                Typographybody={data.Typographybody}
              />
            </Grid>
          ))}
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Image
              src={"/about2.png"}
              className={styles.aboutimg2}
              width={isSmallScreen2 ? 250 : 400}
              height={isSmallScreen2 ? 250 : 400}
            />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}
           sx={{ marginTop: !isSmallScreen ? "100px" : "0" }}>
            <TypographyText
              color="white"
              fontSize={'1.2rem'}
              textAlign='left'
              Typography={
                "  I am a self learned Full Stack Developer,currently Working as a software Devloper .I have one year experience in MERN Stack.I passionate about Web developing .My aim is to become a great developer and I believe in myself that I achieve all my goals. A passionate full-stack developer with hands-on expertise in developing scalable website/application using a wide variety of front-end and back-end skills like, HTML5, CSS, Java scripts, Bootstrap,React,next.js,Redux,Google Analytics etc. Product designer, specializing in UI design and design system. Front end developer who writes clean, elegant and efficient Code."
              }
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Aboutme;
const Data = [
  {
    IconButtoncontent: (
      <>
        <WorkIcon sx={{ color: "#f4af1b" }} />
      </>
    ),
    Typography: "Experience",
    Typographybody: "One year working experience",
  },
  {
    IconButtoncontent: (
      <>
        <VscFolderLibrary style={{ color: "#FFA62B" }} />
      </>
    ),
    Typography: "Projects",
    Typographybody: " project 18+ completed",
  },
  {
    IconButtoncontent: (
      <>
        <AiTwotoneSafetyCertificate style={{ color: "#FFA62B" }} />
      </>
    ),
    Typography: "Qualification",
    Typographybody: "BTech Computer Science",
  },
];
