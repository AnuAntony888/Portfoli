import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "../styles/About.module.css";
import Card from "@mui/material/Card";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TypographyText } from "../Reuse/Reuse";
const Technicalskills = () => {
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  const isSmallScreen2 = useMediaQuery("(max-width:400px)");
  return (
    <div id="technicalskills">
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{ pl: "15%", pr: "15%", pt: "1%", pb: "1%" }}
        >
          <Grid item xs={12}>
            <TypographyText Typography={"What Skills I Have"} color="white" />
            <TypographyText
              Typography={"Technical Skills"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
        </Grid>
        <Grid container spacing={10} sx={{ pl: "15%", pr: "15%", pb: "10%" }}>
          {Data.map((data, index) => (
            <Grid item lg={3} md={3} sm={12} xs={12} key={index}>
              <Card
                sx={{
                  bgcolor: "transparent",
                  border: "1px solid #f4af1b",
                  borderRadius: "50px 10px",
                  bgcolor: "#f4af1b",
                  "&:hover": { bgcolor: "rgb(241, 23, 187)" },
                }}
              >
                <TypographyText
                  Typography={data.Typography}
                  color="black"
                  fontWeight={"bolder"}
                  variant={isSmallScreen ? "h6" : "h5"}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Technicalskills;
const Data = [
  { Typography: "React js" },
  { Typography: "Javascript" },
  { Typography: "Node js" },
  { Typography: "Rest API" },
  { Typography: "Express js" },
  { Typography: "Next js" },
  { Typography: "Redux" },
  { Typography: "Mongodb" },
  { Typography: "HTML" },
  { Typography: "Bootstrap" },
  { Typography: "Git" },
  { Typography: "JWT" },
  { Typography: "CSS" },
  { Typography: "Sql" },
  { Typography: "Cloud services" },
  { Typography: "Ejs" },
];
