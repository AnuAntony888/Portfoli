import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import CodeIcon from "@mui/icons-material/Code";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PaymentIcon from "@mui/icons-material/Payment";
import VerifiedIcon from "@mui/icons-material/Verified";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "../styles/About.module.css";
import { HomeCard } from "../Reuse/Reuse";

const HomeContent = () => {
  const isSmallScreen = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pt: { xs: 11, sm: 14, md: 18 }, px: { xs: 2, sm: 4, md: 8 } }}>
      {/* Hero Section */}
      <Grid container spacing={{ xs: 4, md: 5 }} alignItems="center" sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Left Side: Interactive Code Showcase Window (No Images) */}
        <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
          <Box
            data-aos="fade-up"
            sx={{
              position: "relative",
              maxWidth: { xs: 340, sm: 400, md: 440 },
              mx: "auto",
            }}
          >
            {/* Terminal Card */}
            <Box
              sx={{
                bgcolor: "var(--bg-card, rgba(20, 22, 34, 0.8))",
                backdropFilter: "blur(16px)",
                border: "1px solid var(--border-card, rgba(244, 175, 27, 0.3))",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "var(--shadow-card, 0 12px 35px rgba(0, 0, 0, 0.5))",
                textAlign: "left",
                transition: "all 0.3s ease",
              }}
            >
              {/* Window Header */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  px: 2,
                  py: 1.2,
                  borderBottom: "1px solid var(--border-card, rgba(244, 175, 27, 0.2))",
                  bgcolor: "rgba(0, 0, 0, 0.12)",
                }}
              >
                <Box sx={{ display: "flex", gap: 0.8 }}>
                  <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#ef4444" }} />
                  <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#f59e0b" }} />
                  <Box sx={{ width: 11, height: 11, borderRadius: "50%", bgcolor: "#10b981" }} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-muted, #8a94a6)",
                    letterSpacing: "0.5px",
                    fontFamily: "monospace",
                  }}
                >
                  developer.ts
                </Typography>
                <Box sx={{ width: 40 }} />
              </Box>

              {/* Window Content */}
              <Box
                sx={{
                  p: { xs: 2, sm: 2.5 },
                  fontFamily: "'Fira Code', monospace, Consolas, sans-serif",
                  fontSize: { xs: "0.8rem", sm: "0.88rem" },
                  lineHeight: 1.6,
                }}
              >
                <Box sx={{ mb: 0.5 }}>
                  <span style={{ color: "#ec4899" }}>const</span>{" "}
                  <span style={{ color: "var(--text-primary, #ffffff)", fontWeight: 700 }}>engineer</span>{" "}
                  <span style={{ color: "#06b6d4" }}>=</span> &#123;
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.3 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>name:</span>{" "}
                  <span style={{ color: "#10b981" }}>&quot;Anu Antony&quot;</span>,
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.3 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>role:</span>{" "}
                  <span style={{ color: "#10b981" }}>&quot;React.js Developer&quot;</span>,
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.3 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>experience:</span>{" "}
                  <span style={{ color: "#3b82f6" }}>&quot;4+ Years&quot;</span>,
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.3 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>stack:</span> [
                  <span style={{ color: "#10b981" }}>&quot;React&quot;</span>,{" "}
                  <span style={{ color: "#10b981" }}>&quot;Redux&quot;</span>,{" "}
                  <span style={{ color: "#10b981" }}>&quot;Next.js&quot;</span>],
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.3 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>mobile:</span>{" "}
                  <span style={{ color: "#10b981" }}>&quot;Capacitor (iOS/Android)&quot;</span>,
                </Box>
                <Box sx={{ pl: 2.5, mb: 0.5 }}>
                  <span style={{ color: "var(--accent, #f4af1b)" }}>status:</span>{" "}
                  <span style={{ color: "#3b82f6" }}>&quot;Open to Opportunities 🚀&quot;</span>
                </Box>
                <Box>&#125;;</Box>
              </Box>

              {/* Status bar inside card */}
              <Box
                sx={{
                  px: 2,
                  py: 1,
                  borderTop: "1px solid var(--border-card, rgba(244, 175, 27, 0.15))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  bgcolor: "rgba(0, 0, 0, 0.08)",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#10b981" }} />
                  <Typography sx={{ fontSize: "0.72rem", color: "var(--text-muted, #8a94a6)", fontWeight: 600 }}>
                    Enterprise Ready
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: "0.72rem", color: "var(--text-muted, #8a94a6)" }}>
                  UTF-8 &bull; React 18
                </Typography>
              </Box>
            </Box>

            {/* Experience Floating Badge */}
            <Box
              className={styles.badgeCard}
              sx={{
                position: "absolute",
                bottom: { xs: -12, sm: -15 },
                right: { xs: "5%", sm: "-5%" },
              }}
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <CodeIcon sx={{ color: "var(--accent, #f4af1b)", fontSize: { xs: 20, sm: 26 } }} />
              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontWeight: 800, fontSize: { xs: "0.8rem", sm: "0.95rem" }, lineHeight: 1.1 }}>
                  4+ Years
                </Typography>
                <Typography sx={{ color: "var(--text-muted, #aaa)", fontSize: { xs: "0.68rem", sm: "0.75rem" } }}>
                  Dev Experience
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side: Introduction & Call to Actions */}
        <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Box data-aos="fade-left">
            <Box
              sx={{
                display: "inline-block",
                px: 2,
                py: 0.6,
                borderRadius: "30px",
                bgcolor: "rgba(244, 175, 27, 0.12)",
                border: "1px solid rgba(244, 175, 27, 0.35)",
                color: "#f4af1b",
                fontWeight: 700,
                fontSize: { xs: "0.78rem", sm: "0.85rem" },
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: 2,
              }}
            >
              👋 Hello, I&apos;m Anu Antony
            </Box>

            <Typography
              component="h1"
              sx={{
                fontWeight: 900,
                color: "#ffffff",
                letterSpacing: "-1px",
                lineHeight: 1.15,
                fontSize: { xs: "1.85rem", sm: "2.5rem", md: "3.2rem" },
                mb: 1.5,
              }}
            >
              Software Programmer &amp; <br />
              <span style={{ color: "#f4af1b" }}>React.js Developer</span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#b0b8c4",
                fontSize: { xs: "0.92rem", sm: "1.02rem", md: "1.1rem" },
                lineHeight: 1.7,
                maxWidth: 600,
                mb: 3,
                mx: { xs: "auto", md: 0 },
              }}
            >
              Frontend specialist with <strong>4+ years</strong> of experience building scalable web
              applications and enterprise ERP platforms. Proven track record architecting a Student
              Portal for <strong>35,000+ users</strong>, integrating multi-tier payment gateways
              (BillDesk, GrayQuest, Tamara, Stripe), and deploying cross-platform mobile apps via Capacitor.
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1.2, sm: 1.8 },
                justifyContent: { xs: "center", md: "flex-start" },
                mb: 3.5,
              }}
            >
              <Button
                variant="contained"
                href="#experience"
                endIcon={<ArrowForwardIcon sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" } }} />}
                sx={{
                  bgcolor: "#f4af1b",
                  color: "#000000",
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  px: { xs: 2.2, sm: 3 },
                  py: { xs: 0.9, sm: 1.2 },
                  borderRadius: "12px",
                  textTransform: "none",
                  boxShadow: "0 6px 20px rgba(244, 175, 27, 0.35)",
                  "&:hover": {
                    bgcolor: "#e5a110",
                    boxShadow: "0 8px 25px rgba(244, 175, 27, 0.5)",
                  },
                }}
              >
                View Experience
              </Button>

              <Button
                variant="outlined"
                href="#project"
                sx={{
                  color: "#ffffff",
                  borderColor: "rgba(244, 175, 27, 0.6)",
                  fontWeight: 700,
                  fontSize: { xs: "0.85rem", sm: "0.95rem" },
                  px: { xs: 2, sm: 3 },
                  py: { xs: 0.9, sm: 1.2 },
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    borderColor: "#f4af1b",
                    bgcolor: "rgba(244, 175, 27, 0.12)",
                    color: "#f4af1b",
                  },
                }}
              >
                Selected Projects
              </Button>
            </Box>

            {/* Social Icons */}
            <Box
              className="footer_socials"
              sx={{
                justifyContent: { xs: "center", md: "flex-start" },
                m: 0,
              }}
            >
              <a
                href="https://www.linkedin.com/in/anuantonythelakkadan/"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/AnuAntony888"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://wa.me/916238192992"
                className="social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Chat"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="mailto:anuantony.t.v@gmail.com"
                className="social"
                aria-label="Send Email"
              >
                <EmailIcon />
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* 5 Core Pillars / Metric Cards */}
      <Box sx={{ mt: { xs: 7, md: 12 }, mb: 4, maxWidth: 1250, mx: "auto" }}>
        <Typography
          className={styles.sectionSubtitle}
          sx={{ textAlign: "center" }}
        >
          CORE HIGHLIGHTS &amp; ARCHITECTURE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            fontSize: { xs: "1.35rem", sm: "1.75rem", md: "2.1rem" },
            mb: { xs: 3, md: 5 },
          }}
        >
          Engineering Production-Grade Web Applications
        </Typography>

        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {HighlightsData.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={index === 3 || index === 4 ? 6 : 4} key={index}>
              <div data-aos="fade-up" data-aos-delay={index * 100}>
                <HomeCard
                  icon={data.icon}
                  Typography={data.title}
                  Typographybody={data.body}
                />
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeContent;

const HighlightsData = [
  {
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    title: "4+ Years Professional Experience",
    body: "Extensive hands-on background developing responsive web applications, modular React architectures, and high-volume production enterprise systems.",
  },
  {
    icon: <PeopleAltIcon sx={{ fontSize: 32 }} />,
    title: "Student Portal (35,000+ Users)",
    body: "Built enterprise frontend structure from scratch with reusable component architecture and Redux state management for CHRIST University.",
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 32 }} />,
    title: "Cross-Platform Mobile (Capacitor)",
    body: "Converted web portal to native iOS and Android mobile apps using Capacitor, integrating Firebase Cloud Messaging (FCM) real-time push alerts.",
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 32 }} />,
    title: "Payment Gateway Integration",
    body: "Integrated multi-gateway workflows including BillDesk, GrayQuest, Tamara, and Stripe for seamless student fee and e-commerce payments.",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 32 }} />,
    title: "Spec-Driven Development & Testing",
    body: "Adhering to Spec-Driven Development (SDD), reusable component design, unit testing with Jest & React Testing Library, and Agile collaboration.",
  },
];
