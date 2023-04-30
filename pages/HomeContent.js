import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AOS from "aos";
import styles from "../styles/About.module.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HomeCard, TypographyText } from "../Reuse/Reuse";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Button from "@mui/material/Button";
const HomeContent = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1, pt: "15%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} md={6} sm={12}>
            <div data-aos="fade-up" data-aos-duration="3000">
              <img
                src="/anu.png"
                width={"70%"}
                style={{ marginTop: isSmallScreen ? "20%" : "" }}
              />
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            sm={12}
            sx={{ marginTop: !isSmallScreen ? "400px" : "0" }}
          >
            <div data-aos="fade-up-right" data-aos-duration="3000">
              <TypographyText
                variant={!isSmallScreen ? "h2" : "h5"}
                component="div"
                color={"orange"}
                fontWeight={"bolder"}
                className={styles.rotate}
                Typography={"Hello I'm Anu Antony"}
              />
            </div>
            <div data-aos="fade-up-left" data-aos-duration="3000">
              {" "}
              <TypographyText
                variant={!isSmallScreen ? "h2" : "h5"}
                component="div"
                color={"white"}
                fontWeight={"bolder"}
                Typography={<>Full-Stack Devloper</>}
              />
            </div>

            <div data-aos="zoom-in">
              <div className="footer_socials">
                <a
                  href="https://www.linkedin.com/in/anuantonythelakkadan/"
                  className="social"
                  target="_blank"
                >
                  <LinkedInIcon sx={{ color: "orange" }} />
                </a>
                <a
                  href="https://github.com/AnuAntony888"
                  className="social"
                  target="_blank"
                >
                  <GitHubIcon sx={{ color: "orange" }} />
                </a>
                <a
                  href="https://wa.me/916238192992"
                  className="social"
                  target="_blank"
                >
                  <WhatsAppIcon sx={{ color: "orange" }} />
                </a>
              </div>
            </div>
            <br />
            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">

</div>

          </Grid>
        </Grid>
        <Grid container spacing={10} sx={{ p: "10%" }}>
          {Data.map((data, index) => (
            <Grid item xs={12} lg={4} md={4} sm={12} key={index}>
              <HomeCard
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

export default HomeContent;
const Data = [
  {
    Typography: "Design",
    Typographybody:
      "Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. ",
  },
  {
    Typography: "Review",
    Typographybody:
      "Code Review is an integral process of software development that identifies bugs and defects before the testing phase. Code review is often overlooked as an ongoing practice during the development phase, but countless studies show it's the most effective quality assurance strategy. ",
  },
  {
    Typography: "Develop",
    Typographybody:
      "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management. ",
  },
  {
    Typography: "Testing",
    Typographybody:
      "Web Performance Testing is executed to provide accurate information on the readiness of an application through testing the web site and monitoring the server side application.",
  },
  {
    Typography: "Launch",
    Typographybody:
      "Launching a website is what you need to do after you've designed and built a website (on your computer), and before you tell the world about your internet-accomplishments.",
  },
];
