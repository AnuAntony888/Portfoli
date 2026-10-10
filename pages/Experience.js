import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import BusinessIcon from "@mui/icons-material/Business";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import styles from "../styles/About.module.css";

const Experience = () => {
  return (
    <Box id="experience" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            CAREER JOURNEY
          </Typography>
          <Typography className={styles.sectionTitle}>
            Professional <span style={{ color: "#f4af1b" }}>Experience</span>
          </Typography>
        </Box>

        {/* Experience Timeline Cards */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 4 }}>
          {Experiences.map((exp, index) => (
            <Grid item xs={12} key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <Card className={styles.experienceCard}>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                  <Grid container spacing={1.5} justifyContent="space-between" alignItems="flex-start">
                    <Grid item xs={12} md={8}>
                      <Typography
                        variant="h5"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 800,
                          fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.45rem" },
                          lineHeight: 1.25,
                          mb: 0.8,
                        }}
                      >
                        {exp.role}
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 1 }}>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "#f4af1b",
                            fontWeight: 700,
                            fontSize: { xs: "0.92rem", sm: "1rem" },
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.6,
                          }}
                        >
                          <BusinessIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
                          {exp.company}
                        </Typography>
                        {exp.subtext && (
                          <Typography
                            variant="caption"
                            sx={{ color: "#8a94a6", fontStyle: "italic", fontSize: "0.75rem" }}
                          >
                            ({exp.subtext})
                          </Typography>
                        )}
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ textAlign: { xs: "left", md: "right" } }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 0.8,
                          bgcolor: "rgba(244, 175, 27, 0.12)",
                          border: "1px solid rgba(244, 175, 27, 0.35)",
                          color: "#ffd470",
                          borderRadius: "20px",
                          px: { xs: 1.4, sm: 2 },
                          py: 0.4,
                          fontSize: { xs: "0.78rem", sm: "0.85rem" },
                          fontWeight: 600,
                          mb: 0.5,
                        }}
                      >
                        <CalendarTodayIcon sx={{ fontSize: 16 }} />
                        {exp.duration}
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.5,
                          color: "#8a94a6",
                          fontSize: "0.85rem",
                          justifyContent: { xs: "flex-start", md: "flex-end" },
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 16 }} />
                        {exp.location}
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Bullet Points */}
                  <Box sx={{ mt: 2.5, mb: 3 }}>
                    {exp.points.map((pt, pIdx) => (
                      <Box
                        key={pIdx}
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 1.2,
                          mb: 1.2,
                          color: "#b0b8c4",
                          fontSize: "0.95rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <CheckCircleOutlineIcon
                          sx={{
                            color: "#f4af1b",
                            fontSize: 19,
                            mt: "3px",
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "#b0b8c4", fontSize: "0.93rem" }}>
                          {pt}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  {/* Tech stack chips */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, pt: 1, borderTop: "1px solid rgba(244, 175, 27, 0.15)" }}>
                    {exp.skills.map((skill, sIdx) => (
                      <Chip
                        key={sIdx}
                        label={skill}
                        size="small"
                        sx={{
                          bgcolor: "rgba(244, 175, 27, 0.08)",
                          border: "1px solid rgba(244, 175, 27, 0.25)",
                          color: "#f4af1b",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;

const Experiences = [
  {
    role: "Software Programmer / React.js Developer",
    company: "CHRIST (Deemed to be University)",
    subtext: "Dec 2024 – Aug 2025 via IOLITE Technologies; Aug 2025 – Present as direct employee",
    duration: "Dec 2024 – Present",
    location: "Bengaluru, India",
    points: [
      "Part of the core engineering team that built the Student Portal (35,000+ active users) from scratch, establishing scalable frontend architecture, reusable component patterns, and centralized Redux state management.",
      "Develop and maintain enterprise web applications using React.js, Material-UI, and Redux with highly reusable, responsive, and cross-browser compatible components.",
      "Build complex student-facing workflows, analytical dashboards, academic services, and role-based access features across multiple ERP modules.",
      "Converted the Student Portal into native iOS and Android mobile applications using Capacitor, implementing platform-specific adaptations for high-performance cross-platform execution.",
      "Integrated Firebase Cloud Messaging (FCM) in the mobile apps to deliver reliable real-time push notifications and critical campus alerts to 35,000+ students.",
      "Integrated and maintained payment gateways (BillDesk, GrayQuest) for seamless student tuition fee payments and financial tracking.",
      "Adhere to Spec-Driven Development (SDD): analyzing specifications, designing component hierarchies and data contracts, and writing unit/component tests with Jest and React Testing Library.",
      "Collaborate cross-functionally with backend engineers, QA, UI/UX designers, and academic stakeholders in Agile/Scrum sprints, leveraging AI-assisted workflows for efficient delivery.",
    ],
    skills: [
      "React.js",
      "Redux",
      "Material-UI",
      "Capacitor (iOS/Android)",
      "Firebase Cloud Messaging (FCM)",
      "REST APIs",
      "BillDesk",
      "GrayQuest",
      "Jest & RTL",
      "Spec-Driven Development",
      "Agile/Scrum",
    ],
  },
  {
    role: "Software Engineer",
    company: "Vedaham Business Solutions",
    subtext: "Software & E-Commerce Solutions",
    duration: "Oct 2022 – Nov 2024",
    location: "Trivandrum, India",
    points: [
      "Developed responsive, feature-rich web applications utilizing React.js, Node.js, MySQL, and secure REST APIs.",
      "Engineered reusable frontend UI component libraries and business workflows for e-commerce and inventory/product management platforms.",
      "Integrated international payment gateways, notably Tamara (Buy Now Pay Later) and Stripe, managing checkout pipelines, webhooks, and status reconciliations.",
      "Delivered and supported high-profile live production client projects including ToyCity (toycity.me), Riviera IT (rivierait.co), and the official studio portal Vedaham (vedaham.xyz).",
      "Collaborated on deployment pipelines, production debugging, performance optimizations, and defect resolutions.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "MySQL",
      "REST APIs",
      "Stripe",
      "Tamara Payment Gateway",
      "E-Commerce Workflows",
      "Responsive UI",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Websoullabs",
    subtext: "Frontend Engineering",
    duration: "May 2022 – Oct 2022",
    location: "Ernakulam, India",
    points: [
      "Developed modular, reusable React.js and Material-UI components closely adhering to Figma UI/UX designs and design systems.",
      "Contributed to clean, maintainable frontend codebases, documentation, code standards, and developer onboarding.",
      "Assisted senior developers with responsive layout testing, bug fixes, and cross-browser compatibility.",
    ],
    skills: [
      "React.js",
      "Material-UI",
      "JavaScript (ES6+)",
      "HTML5 / CSS3",
      "UI/UX Implementation",
      "Git / GitHub",
    ],
  },
];
