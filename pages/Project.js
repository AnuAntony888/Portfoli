import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../styles/About.module.css";
import { Projectcard } from "../Reuse/Reuse";

const Project = () => {
  return (
    <Box id="project" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            FEATURED WORKS &amp; CLIENTS
          </Typography>
          <Typography className={styles.sectionTitle}>
            Selected <span style={{ color: "#f4af1b" }}>Projects</span>
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
          {ProjectsData.map((project, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Projectcard
                Typography={project.title}
                role={project.role}
                category={project.category}
                description={project.description}
                link={project.link}
                tech={project.tech}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Project;

const ProjectsData = [
  {
    title: "Enterprise ERP & Student Portal",
    role: "Core Frontend Developer (35,000+ Users)",
    category: "Enterprise ERP / Education",
    description:
      "Enterprise application supporting student-facing services, dashboards, academic workflows, feedback, fee payments, and administrative processes for CHRIST (Deemed to be University). Built from scratch, including frontend structure, reusable component architecture, Capacitor mobile apps, and payment integrations.",
    tech: ["React.js", "Redux", "Material-UI", "REST APIs", "Capacitor", "FCM", "BillDesk"],
  },
  {
    title: "My Family Fitness",
    role: "Sole Frontend Developer",
    category: "E-Commerce / Health & Fitness",
    link: "https://myfamilyfitness.com",
    description:
      "Responsive e-commerce platform with product catalogs, shopping cart, state management, REST API integration, and online payment processing. Independently developed the complete frontend from scratch to production, integrating Tamara (BNPL) and Stripe payment gateways.",
    tech: ["React.js", "JavaScript", "Redux", "REST APIs", "Tamara", "Stripe"],
  },
  {
    title: "ToyCity",
    role: "Frontend Engineer (Live Client)",
    category: "E-Commerce Store",
    link: "https://toycity.me",
    description:
      "Modern e-commerce store for educational, Montessori, and STEM toys. Features interactive product catalogs, filtering, cart management, responsive UI across mobile and desktop, and checkout workflows.",
    tech: ["React.js", "REST APIs", "Payment Gateway", "Responsive UI", "CSS3"],
  },
  {
    title: "Riviera IT",
    role: "Frontend Engineer (Dubai Client)",
    category: "Corporate Portal",
    link: "https://rivierait.co",
    description:
      "Corporate web platform for a Dubai PEO/EOR firm offering payroll, HR, and visa services. Built with clean, modern corporate layouts, interactive service breakdowns, and optimized performance.",
    tech: ["React.js", "Material-UI", "Modern UI", "SEO", "Responsive Design"],
  },
  {
    title: "Vedaham Business Solutions",
    role: "Frontend Engineer",
    category: "Agency / Corporate Site",
    link: "https://vedaham.xyz",
    description:
      "Company website for Vedaham Business Solutions studio. Designed to showcase enterprise software solutions, client case studies, digital capabilities, and contact funnels.",
    tech: ["React.js", "Material-UI", "JavaScript", "Animation", "Responsive Design"],
  },
  {
    title: "Career Consultancy Platform",
    role: "Full-Stack / Frontend Developer",
    category: "Consultancy & Recruitment",
    description:
      "Career consultancy portal providing job seekers with career advisory workflows, recruitment listings, resume submissions, and administrative review dashboards.",
    tech: ["React.js", "Node.js", "REST APIs", "Bootstrap", "Express.js"],
  },
];
