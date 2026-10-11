import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import { navData } from "./Header";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "var(--footer-bg, #08090d)",
        borderTop: "1px solid var(--border-card, rgba(244, 175, 27, 0.2))",
        py: { xs: 4.5, md: 6 },
        px: { xs: 2, sm: 3 },
        mt: { xs: 6, md: 10 },
        transition: "all 0.3s ease",
      }}
    >
      <Box sx={{ maxWidth: 1100, mx: "auto", textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-0.5px",
            fontSize: { xs: "1.4rem", sm: "1.8rem", md: "2.1rem" },
            mb: 0.5,
          }}
        >
          ANU <span style={{ color: "#f4af1b" }}>ANTONY</span>
        </Typography>

        <Typography
          variant="subtitle1"
          sx={{ color: "#a4b0be", mb: { xs: 2, sm: 3 }, fontWeight: 500, fontSize: { xs: "0.82rem", sm: "0.95rem" } }}
        >
          Software Programmer &bull; React.js Developer &bull; Kochi, India
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: { xs: 0.5, sm: 1 },
            mb: { xs: 3, sm: 4 },
          }}
        >
          {navData.map((item) => (
            <Button
              key={item.label}
              component={Link}
              href={item.href}
              sx={{
                color: "#ced6e0",
                fontSize: { xs: "0.8rem", sm: "0.88rem" },
                px: { xs: 0.8, sm: 1.5 },
                py: 0.5,
                textTransform: "none",
                fontWeight: 500,
                "&:hover": { color: "#f4af1b", bgcolor: "transparent" },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box
          className="footer_socials"
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mb: 3,
          }}
        >
          <a
            href="https://www.linkedin.com/in/anuantonythelakkadan/"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/AnuAntony888"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://wa.me/916238192992"
            className="social"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="mailto:websoullabsanu1@gmail.com"
            className="social"
            aria-label="Email"
          >
            <EmailIcon />
          </a>
        </Box>

        <Typography
          variant="body2"
          sx={{ color: "#747d8c", fontSize: "0.85rem" }}
        >
          &copy; {new Date().getFullYear()} Anu Antony. All Rights Reserved. Built with React &amp; Next.js.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
