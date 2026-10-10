import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "../../styles/About.module.css";
import { AboutCard } from "../../Reuse/Reuse";

const Aboutme = () => {
  return (
    <Box id="aboutme" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            GET TO KNOW ME
          </Typography>
          <Typography className={styles.sectionTitle}>
            About <span style={{ color: "#f4af1b" }}>Me</span>
          </Typography>
        </Box>

        {/* 3 Metric Summary Cards */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }} sx={{ mb: { xs: 4, md: 6 } }} data-aos="fade-up">
          {SummaryCards.map((card, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <AboutCard
                IconButtoncontent={card.icon}
                Typography={card.title}
                Typographybody={card.body}
              />
            </Grid>
          ))}
        </Grid>

        {/* Detailed Bio & Focus Areas */}
        <Grid container spacing={{ xs: 3.5, md: 5 }} alignItems="center">
          {/* Developer Overview & Architecture Highlights (No Images) */}
          <Grid item xs={12} md={5} data-aos="fade-right">
            <Box
              sx={{
                bgcolor: "var(--bg-card, rgba(20, 22, 34, 0.75))",
                border: "1px solid var(--border-card, rgba(244, 175, 27, 0.28))",
                borderRadius: "20px",
                p: { xs: 2.5, sm: 3 },
                boxShadow: "var(--shadow-card, 0 8px 30px rgba(0, 0, 0, 0.45))",
                textAlign: "left",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2.5 }}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: "12px",
                    bgcolor: "var(--accent-light, rgba(244, 175, 27, 0.12))",
                    border: "1px solid var(--accent-border, rgba(244, 175, 27, 0.35))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent, #f4af1b)",
                    fontSize: "1.15rem",
                    fontWeight: 900,
                  }}
                >
                  AA
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.05rem", color: "var(--text-primary, #ffffff)" }}>
                    Anu Antony
                  </Typography>
                  <Typography sx={{ fontSize: "0.78rem", color: "var(--accent, #f4af1b)", fontWeight: 600 }}>
                    Software Programmer &amp; React Specialist
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {[
                  { label: "Location", val: "Kochi, Kerala, India" },
                  { label: "Experience", val: "4+ Years in Frontend Engineering" },
                  { label: "Education", val: "Master of Computer Applications (MCA)" },
                  { label: "Core Stack", val: "React.js, Redux, Next.js, Capacitor" },
                  { label: "Methodology", val: "Spec-Driven Development (SDD), Agile" },
                ].map((item, idx) => (
                  <Box key={idx} sx={{ pb: 1, borderBottom: idx < 4 ? "1px solid var(--border-card, rgba(244, 175, 27, 0.15))" : "none" }}>
                    <Typography sx={{ fontSize: "0.72rem", color: "var(--text-muted, #8a94a6)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                      {item.label}
                    </Typography>
                    <Typography sx={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary, #ffffff)", mt: 0.2 }}>
                      {item.val}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }} data-aos="fade-left">
            <Typography
              variant="h5"
              sx={{
                color: "#ffffff",
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: "1.15rem", sm: "1.3rem", md: "1.45rem" },
                lineHeight: 1.3,
              }}
            >
              Passionate React.js Developer &amp; Enterprise Frontend Architect
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#b0b8c4",
                lineHeight: 1.7,
                fontSize: { xs: "0.88rem", sm: "0.95rem", md: "1rem" },
                mb: 2,
              }}
            >
              Software Programmer / React.js Developer with <strong>4+ years</strong> of experience
              building responsive web applications and enterprise solutions. Strong hands-on
              expertise in <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, reusable
              component architecture, state management (<strong>Redux</strong>), and REST API integration.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#b0b8c4",
                lineHeight: 1.7,
                fontSize: { xs: "0.88rem", sm: "0.95rem", md: "1rem" },
                mb: 2.5,
              }}
            >
              Experienced in large-scale Student Portal development serving <strong>35,000+ users</strong> at
              CHRIST (Deemed to be University), managing academic workflows, payment gateways
              (BillDesk, GrayQuest, Tamara, Stripe), and deploying cross-platform mobile apps with
              <strong> Capacitor</strong> and <strong>Firebase Cloud Messaging (FCM)</strong>. I follow
              Spec-Driven Development (SDD) to write clean, maintainable, and thoroughly tested code.
            </Typography>

            {/* Key Skill Highlights */}
            <Typography
              variant="subtitle2"
              sx={{
                color: "#f4af1b",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                mb: 1.5,
                fontSize: { xs: "0.8rem", sm: "0.85rem" },
              }}
            >
              Core Competencies:
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8, mb: 3, justifyContent: { xs: "center", md: "flex-start" } }}>
              {Competencies.map((comp, idx) => (
                <Chip
                  key={idx}
                  icon={<CheckCircleIcon sx={{ "&&": { color: "#f4af1b", fontSize: "0.95rem" } }} />}
                  label={comp}
                  sx={{
                    bgcolor: "rgba(244, 175, 27, 0.1)",
                    border: "1px solid rgba(244, 175, 27, 0.3)",
                    color: "#ffd470",
                    fontWeight: 600,
                    fontSize: { xs: "0.75rem", sm: "0.82rem" },
                    py: 1.8,
                  }}
                />
              ))}
            </Box>

            <Button
              variant="contained"
              href="#experience"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#f4af1b",
                color: "#000",
                fontWeight: 700,
                borderRadius: "10px",
                textTransform: "none",
                px: 2.5,
                py: 1,
                fontSize: { xs: "0.88rem", sm: "0.95rem" },
                width: { xs: "100%", sm: "auto" },
                "&:hover": { bgcolor: "#e5a110" },
              }}
            >
              View Work Experience
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Aboutme;

const SummaryCards = [
  {
    icon: <WorkIcon sx={{ color: "#f4af1b", fontSize: 28 }} />,
    title: "4+ Years Experience",
    body: "Software Programmer & React.js Developer across enterprise and e-commerce platforms",
  },
  {
    icon: <PeopleIcon sx={{ color: "#f4af1b", fontSize: 28 }} />,
    title: "35,000+ Active Users",
    body: "Built enterprise Student Portal & ERP architecture from scratch for CHRIST University",
  },
  {
    icon: <SchoolIcon sx={{ color: "#f4af1b", fontSize: 28 }} />,
    title: "B.Tech Computer Science",
    body: "Bachelor of Technology in CSE from Mahatma Gandhi University, Kottayam (2017)",
  },
];

const Competencies = [
  "React.js & ES6+",
  "Redux State Management",
  "Capacitor iOS & Android",
  "Payment Gateways (Stripe, Tamara, BillDesk)",
  "Material-UI & Tailwind CSS",
  "Spec-Driven Development (SDD)",
  "Jest & RTL Testing",
  "FCM Push Notifications",
];
