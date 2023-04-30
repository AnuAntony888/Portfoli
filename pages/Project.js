import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/About.module.css";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Projectcard, TypographyText,  } from "./Reuse/Reuse";

const Project = () => {
    const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <div id="project">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ pl: "15%", pr: "15%", pt: "1%", pb: "1%" }}
        >
          <Grid item xs={12}>
            <TypographyText Typography={"My Recent Personal Works"} color="white" />
            <TypographyText
              Typography={"Projects"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ pl: '10%', pr: "10%", pb: "10%" }}>
           {Data.map((data, index) => (
            <Grid item lg={4} md={3} sm={6} xs={12} key={index}>
              <Projectcard
                Typography={data.Typography}
                image={data.image}
              />
            </Grid>
          ))} 
        </Grid>
      </Box>
    </div>
  )
}

export default Project
const Data = [ {
    image:'/redux.png',
  Typography: "Ecommerce (utilized Redux)"},
    {
        image:'/tsm.png',
      Typography: "TSM(Utilized React js)"},
      {
        image:'/img.png',
      Typography: "ASUS (Utilized React js)"},
      {
        image:'/Projectcareer.png',
      Typography: "Career Consultancy(utilized Mern Stack)"},
      {
        image:'/airbook.png',
      Typography: "AirBooking (utilized React)"},

      {
        image:'/omen.png',
      Typography: "Omen(utilized Bootstrap)"}
    ]
