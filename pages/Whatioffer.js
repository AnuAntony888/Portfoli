import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/About.module.css";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText, Whatioffercard } from "./Reuse/Reuse";

const Whatioffer = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <div id="services">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ pl: "15%", pr: "15%", pt: "1%", pb: "1%" }}
        >
          <Grid item xs={12}>
            <TypographyText Typography={"What I offer"} color="white" />
            <TypographyText
              Typography={"Services"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
        </Grid>
        <Grid container spacing={10} sx={{ pl: '10%', pr: "10%", pb: "10%" }}>
          {Data.map((data, index) => (
            <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
              <Whatioffercard
                Typography={data.Typography}
                Typographybody={data.Typographybody}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Whatioffer;
const Data = [
  {
    Typography: "Full Stack Development",
    Typographybody: (
      <ul>
        <li>Developing front end website architecture using React js.</li>
        <li>Designing user interactions on web pages.</li>
        <li>Developing back end website applications.</li>

        <li>
          Creating servers and databases for functionality using Mongo db and
          Nodejs
        </li>

        <li>Ensuring responsiveness of applications.</li>

        <li>Designing and developing APIs.</li>
      </ul>
    ),
  },
  {
    Typography: "Front-End Development",
    Typographybody: (
      <ul>
        <li>Developing front end website architecture using React js</li>
        <li>
          Use markup languages like HTML to create user-friendly web pages
        </li>
        <li>Maintain and improve website</li>
        <li>Design mobile-based features</li>
        <li>
          Collaborate with back-end developers and web designers to improve
          usability
        </li>
        <li>Using CSS for Creating Stylish Websites</li>
      </ul>
    ),
  },
  {
    Typography: "Back-End Development",
    Typographybody: (
      <ul>
      <li>Developing back end website applications</li>  
<li>Creating servers and databases for functionality using Mongo db and Nodejs</li>

<li>Designing and developing APIs.</li>

<li>Collaborate with Front-end developers</li>
<li>Main focus on coding and debugging</li>

<li>Be involved and participate in the overall application lifecycle</li>


      </ul>
    ),
  },
  ,
];
