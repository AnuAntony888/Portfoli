import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import styles from "../styles/Contact.module.css";
import aboutStyles from "../styles/About.module.css";
import { ContactCard } from "../Reuse/Reuse";

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_qq81bkj";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_ys0ukli";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "RmKI3SQPuZ2H8qOd3";
const RECIPIENT_EMAIL =
  process.env.NEXT_PUBLIC_TO_EMAIL || "websoullabsanu1@gmail.com";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    // Sync common EmailJS template field variables
    if (form.current) {
      const formEl = form.current;
      const nameVal = formEl.elements["name"]?.value || "";
      const emailVal = formEl.elements["email"]?.value || "";
      if (formEl.elements["from_name"]) formEl.elements["from_name"].value = nameVal;
      if (formEl.elements["user_name"]) formEl.elements["user_name"].value = nameVal;
      if (formEl.elements["from_email"]) formEl.elements["from_email"].value = emailVal;
      if (formEl.elements["user_email"]) formEl.elements["user_email"].value = emailVal;
      if (formEl.elements["reply_to"]) formEl.elements["reply_to"].value = emailVal;
      if (formEl.elements["to_email"]) formEl.elements["to_email"].value = RECIPIENT_EMAIL;
      if (formEl.elements["recipient"]) formEl.elements["recipient"].value = RECIPIENT_EMAIL;
      if (formEl.elements["to_name"]) formEl.elements["to_name"].value = "Anu Antony";
    }

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSubmitting(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
          });
          if (form.current) {
            form.current.reset();
          }
        },
        (error) => {
          setIsSubmitting(false);
          setStatusMessage({
            type: "error",
            text: `Oops, something went wrong sending your message. Please reach out directly via ${RECIPIENT_EMAIL} or WhatsApp.`,
          });
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <Box id="contactme" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 6, md: 8 }, px: { xs: 2.5, sm: 5, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* Section Header */}
        <Box className={aboutStyles.sectionHeader} data-aos="fade-up" sx={{ mb: { xs: 3.5, md: 4.5 } }}>
          <Typography className={aboutStyles.sectionSubtitle}>
            GET IN TOUCH
          </Typography>
          <Typography className={aboutStyles.sectionTitle}>
            Contact <span style={{ color: "#f4af1b" }}>Me</span>
          </Typography>
        </Box>

        <Grid container spacing={3.5} alignItems="flex-start">
          {/* Contact Direct Cards */}
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Grid container spacing={2}>
              {ContactMethods.map((item, index) => (
                <Grid item xs={12} sm={6} md={12} key={index}>
                  <ContactCard
                    IconButtoncontent={item.icon}
                    Typography={item.title}
                    Typographybody={item.body}
                    href={item.href}
                    target={item.target}
                    btnText={item.btnText}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7} data-aos="fade-left">
            <Box
              sx={{
                bgcolor: "var(--bg-card, rgba(20, 22, 34, 0.75))",
                backdropFilter: "blur(14px)",
                border: "1px solid var(--border-card, rgba(244, 175, 27, 0.25))",
                borderRadius: "16px",
                p: { xs: 2.5, md: 3.5 },
                boxShadow: "var(--shadow-card, 0 10px 30px rgba(0, 0, 0, 0.5))",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#ffffff",
                  fontWeight: 800,
                  fontSize: { xs: "1.15rem", md: "1.25rem" },
                  mb: 0.8,
                  textAlign: "left",
                }}
              >
                Send Me a Message
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#a4b0be",
                  fontSize: "0.85rem",
                  mb: 2.2,
                  textAlign: "left",
                }}
              >
                Whether you have an opportunity, a project proposal, or a question, feel free to drop a message!
              </Typography>

              {statusMessage.text && (
                <Alert
                  severity={statusMessage.type}
                  sx={{
                    mb: 2.5,
                    borderRadius: "10px",
                    bgcolor:
                      statusMessage.type === "success"
                        ? "rgba(46, 125, 50, 0.2)"
                        : "rgba(211, 47, 47, 0.2)",
                    color: statusMessage.type === "success" ? "#a3e635" : "#fca5a5",
                    border: `1px solid ${
                      statusMessage.type === "success" ? "#4ade80" : "#f87171"
                    }`,
                  }}
                >
                  {statusMessage.text}
                </Alert>
              )}

              <form ref={form} onSubmit={sendEmail}>
                {/* Fallback field names for various EmailJS template configurations */}
                <input type="hidden" name="from_name" />
                <input type="hidden" name="user_name" />
                <input type="hidden" name="from_email" />
                <input type="hidden" name="user_email" />
                <input type="hidden" name="reply_to" />
                <input type="hidden" name="to_email" defaultValue={RECIPIENT_EMAIL} />
                <input type="hidden" name="recipient" defaultValue={RECIPIENT_EMAIL} />
                <input type="hidden" name="to_name" defaultValue="Anu Antony" />

                <Box sx={{ mb: 1.8 }}>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    name="name"
                    required
                    className={styles.textFieldStyles}
                  />
                </Box>

                <Box sx={{ mb: 1.8 }}>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    name="email"
                    required
                    className={styles.textFieldStyles}
                  />
                </Box>

                <Box sx={{ mb: 1.8 }}>
                  <input
                    type="text"
                    placeholder="Subject / Project Role"
                    name="subject"
                    className={styles.textFieldStyles}
                  />
                </Box>

                <Box sx={{ mb: 2.2 }}>
                  <textarea
                    placeholder="Your Message..."
                    name="message"
                    rows={4}
                    required
                    className={styles.textFieldStyles}
                  />
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  endIcon={<SendIcon sx={{ fontSize: "1.1rem" }} />}
                  sx={{
                    bgcolor: "#f4af1b",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    py: 1,
                    px: 3.2,
                    borderRadius: "10px",
                    textTransform: "none",
                    boxShadow: "0 4px 16px rgba(244, 175, 27, 0.35)",
                    "&:hover": {
                      bgcolor: "#e5a110",
                      boxShadow: "0 6px 20px rgba(244, 175, 27, 0.5)",
                    },
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;

const ContactMethods = [
  {
    icon: <MailOutlineIcon sx={{ color: "#f4af1b", fontSize: 22 }} />,
    title: "Email",
    body: "websoullabsanu1@gmail.com",
    href: "mailto:websoullabsanu1@gmail.com",
    btnText: "Send Email",
  },
  {
    icon: <WhatsAppIcon sx={{ color: "#f4af1b", fontSize: 22 }} />,
    title: "WhatsApp",
    body: "+91 62381 92992",
    href: "https://wa.me/916238192992",
    target: "_blank",
    btnText: "Chat on WhatsApp",
  },
  {
    icon: <LinkedInIcon sx={{ color: "#f4af1b", fontSize: 22 }} />,
    title: "LinkedIn",
    body: "linkedin.com/in/anuantonythelakkadan",
    href: "https://www.linkedin.com/in/anuantonythelakkadan/",
    target: "_blank",
    btnText: "Connect on LinkedIn",
  },
  {
    icon: <LocationOnIcon sx={{ color: "#f4af1b", fontSize: 22 }} />,
    title: "Location",
    body: "Kochi, Kerala, India",
    href: "https://maps.google.com/?q=Kochi,Kerala,India",
    target: "_blank",
    btnText: "View on Map",
  },
];
