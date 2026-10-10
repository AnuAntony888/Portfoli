import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import WebIcon from "@mui/icons-material/Web";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PaymentIcon from "@mui/icons-material/Payment";
import SpeedIcon from "@mui/icons-material/Speed";
import styles from "../styles/About.module.css";
import { Whatioffercard } from "../Reuse/Reuse";

const Whatioffer = () => {
  return (
    <Box id="services" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1250, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            WHAT I OFFER
          </Typography>
          <Typography className={styles.sectionTitle}>
            Specialized <span style={{ color: "#f4af1b" }}>Services</span>
          </Typography>
        </Box>

        {/* Services Cards */}
        <Grid container spacing={{ xs: 2.5, sm: 3, md: 3.5 }}>
          {ServicesData.map((service, index) => (
            <Grid item xs={12} sm={6} lg={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Whatioffercard
                icon={service.icon}
                Typography={service.title}
                Typographybody={service.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Whatioffer;

const ServicesData = [
  {
    icon: <WebIcon sx={{ fontSize: 26 }} />,
    title: "Enterprise Web & React.js Development",
    content: (
      <ul>
        <li>Developing high-performance, responsive web portals using React.js and Next.js.</li>
        <li>Architecting reusable component libraries using Material-UI and Tailwind CSS.</li>
        <li>Implementing centralized state management and caching using Redux &amp; Context API.</li>
        <li>Building student and administrative portals supporting 35,000+ active users.</li>
        <li>Ensuring cross-browser compatibility, accessibility, and high performance.</li>
      </ul>
    ),
  },
  {
    icon: <PhoneIphoneIcon sx={{ fontSize: 26 }} />,
    title: "Cross-Platform Mobile Apps (Capacitor)",
    content: (
      <ul>
        <li>Transforming React web apps into production-ready iOS and Android apps using Capacitor.</li>
        <li>Integrating Firebase Cloud Messaging (FCM) for real-time alerts and push notifications.</li>
        <li>Applying platform-specific UI adjustments and native device capability integrations.</li>
        <li>Maintaining unified codebases to ship features simultaneously across web and mobile.</li>
      </ul>
    ),
  },
  {
    icon: <PaymentIcon sx={{ fontSize: 26 }} />,
    title: "Payment Gateway & E-Commerce Integration",
    content: (
      <ul>
        <li>End-to-end integration of payment gateways: BillDesk, GrayQuest, Tamara, and Stripe.</li>
        <li>Building secure checkout pipelines, installment options (BNPL), and webhook handlers.</li>
        <li>Automating student fee payments, receipt generation, and payment status verification.</li>
        <li>Developing catalog, cart, and order management workflows for e-commerce stores.</li>
      </ul>
    ),
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 26 }} />,
    title: "Spec-Driven Development & API Integration",
    content: (
      <ul>
        <li>Analyzing product requirements and designing clean frontend contracts using SDD.</li>
        <li>Integrating RESTful APIs with secure token handling, error states, and loading states.</li>
        <li>Writing unit and component tests using Jest and React Testing Library.</li>
        <li>Providing production support, debugging, defect resolution, and code refactoring.</li>
      </ul>
    ),
  },
];
