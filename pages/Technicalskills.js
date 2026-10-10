import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CodeIcon from "@mui/icons-material/Code";
import StyleIcon from "@mui/icons-material/Style";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BuildIcon from "@mui/icons-material/Build";
import PsychologyIcon from "@mui/icons-material/Psychology";
import styles from "../styles/About.module.css";

const Technicalskills = () => {
  return (
    <Box id="technicalskills" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            WHAT SKILLS I HAVE
          </Typography>
          <Typography className={styles.sectionTitle}>
            Technical <span style={{ color: "#f4af1b" }}>Skills</span>
          </Typography>
        </Box>

        {/* Skill Groups Grid */}
        <Grid container spacing={{ xs: 2, sm: 2.5, md: 3 }}>
          {SkillCategories.map((cat, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 80}>
              <Card className={styles.skillGroupCard}>
                <CardContent sx={{ p: 1 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: "12px",
                        bgcolor: "rgba(244, 175, 27, 0.12)",
                        border: "1px solid rgba(244, 175, 27, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#f4af1b",
                      }}
                    >
                      {cat.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#ffffff",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {cat.category}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: "#8a94a6", fontSize: "0.75rem" }}
                      >
                        {cat.subtitle}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Skills Pills */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                    {cat.skills.map((skill, sIdx) => (
                      <span key={sIdx} className={styles.skillPill}>
                        {skill}
                      </span>
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

export default Technicalskills;

const SkillCategories = [
  {
    icon: <CodeIcon />,
    category: "Frontend Core",
    subtitle: "Modern Web Foundations",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Next.js",
      "HTML5",
      "CSS3",
      "Responsive UI",
    ],
  },
  {
    icon: <StyleIcon />,
    category: "UI Libraries & Design",
    subtitle: "Component Systems & Styling",
    skills: [
      "Material-UI (MUI)",
      "Tailwind CSS",
      "Bootstrap",
      "Styled Components",
      "Emotion",
      "Figma to Code",
    ],
  },
  {
    icon: <StorageIcon />,
    category: "State Management",
    subtitle: "Predictable Application State",
    skills: [
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Reusable Component Architecture",
      "Custom Hooks",
    ],
  },
  {
    icon: <ApiIcon />,
    category: "APIs & Integration",
    subtitle: "Data Flow & Services",
    skills: [
      "REST APIs",
      "API Integration",
      "JWT Authentication",
      "Axios / Fetch",
      "Error Handling",
    ],
  },
  {
    icon: <PaymentIcon />,
    category: "Payment Gateways",
    subtitle: "Fintech & E-Commerce Workflows",
    skills: [
      "BillDesk",
      "GrayQuest",
      "Tamara (BNPL)",
      "Stripe",
      "Checkout Workflows",
    ],
  },
  {
    icon: <PhoneAndroidIcon />,
    category: "Mobile & Cloud Messaging",
    subtitle: "Cross-Platform Ecosystem",
    skills: [
      "Capacitor (iOS/Android)",
      "Firebase Cloud Messaging (FCM)",
      "Push Notifications",
      "Cross-Platform React",
    ],
  },
  {
    icon: <BuildIcon />,
    category: "Working Knowledge",
    subtitle: "Full-Stack & Backend Basics",
    skills: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    icon: <BuildIcon />,
    category: "Testing & Tooling",
    subtitle: "Developer Environments & CI",
    skills: [
      "Jest",
      "React Testing Library",
      "Git & GitHub",
      "VS Code",
      "npm",
      "CI/CD Pipelines",
    ],
  },
  {
    icon: <PsychologyIcon />,
    category: "Practices & Methodologies",
    subtitle: "Engineering Principles",
    skills: [
      "Spec-Driven Development (SDD)",
      "Agile / Scrum",
      "Code Reviews",
      "AI-Assisted Development",
      "Production Support",
    ],
  },
];
