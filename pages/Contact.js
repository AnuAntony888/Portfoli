import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import TextField from "@mui/material/TextField";
import styles from "../styles/Contact.module.css";
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { VscFolderLibrary } from "react-icons/vsc";

import { AiTwotoneSafetyCertificate } from "react-icons/ai";
import { AboutCard, ContactCard, TypographyText } from "../Reuse/Reuse";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jyoqnxb",
        "template_3nxjfjn",
        form.current,
        "9zScA-1V-BCm8E_Ck"
      )
      .then(
        (result) => {
          console.log(result.text, "console.text");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const isSmallScreen = useMediaQuery("(max-width:769px)");
  return (
    <div>
      <Box id='contactme'>
        <Grid
          container
          spacing={10}
          sx={{ pl: "10%", pr: "10%", pt: "5%", pb: "10%" }}
        >
          <Grid item xs={12}>
            <TypographyText Typography={"Get In Touch"} color="white" />
            <TypographyText
              Typography={"Contact Me"}
              color="#f4af1b"
              variant={!isSmallScreen ? "h2" : "h5"}
            />
          </Grid>
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Grid container spacing={10}>
            {Data.map((data, index) => (
            <Grid item  xs={12} key={index}>
              <ContactCard
                IconButtoncontent={data.IconButtoncontent}
                Typography={data.Typography}
                Typographybody={data.Typographybody}
                href={data.href}
              />
            </Grid>
          ))}
            </Grid>
          </Grid>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <Box>
              <Grid container spacing={10}>
                <Grid item xs={12}>
                  <form action="" ref={form} onSubmit={sendEmail}>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <input
                        fullWidth
                        id="fullWidth"
                        type="text"
                        placeholder="Your Full Name"
                        name="name"
                        required
                        className={styles.textfielsttyles}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <input
                        fullWidth
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        required
                        className={styles.textfielsttyles}
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <textarea
                        placeholder="Your message"
                        name="message"
                        rows="7"
                        className={styles.textfielsttyles}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sx={{ pb: "2%" }}>
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          bgcolor: "#f4af1b",
                          color: "black",
                          fontWeight: "bolder",
                          border: "1px solid #f4af1b",
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Contact;
const Data = [
  {
    IconButtoncontent: (
      
        <MailIcon sx={{ color: "#f4af1b" }} />
      
    ),
    Typography: "Email",
    Typographybody: "anuantony.t.v@gamil.com",
    href:'mailto:anuantony.t.v@gamil.com.com'
  },
  {
    IconButtoncontent: (
      
        <WhatsAppIcon style={{ color: "#FFA62B" }} />
      
    ),
    Typography: "WhatsApp",
    Typographybody: " +91 6238192992",
    href:'https://wa.me/916238192992'
  },

];
