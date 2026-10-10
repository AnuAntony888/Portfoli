import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import styles from "../styles/About.module.css";

const Education = () => {
  return (
    <Box id="education" sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 8 }, px: { xs: 2, sm: 4, md: 8 } }}>
      <Box sx={{ maxWidth: 1100, mx: "auto" }}>
        {/* Section Header */}
        <Box className={styles.sectionHeader} data-aos="fade-up">
          <Typography className={styles.sectionSubtitle}>
            ACADEMIC BACKGROUND
          </Typography>
          <Typography className={styles.sectionTitle}>
            Education &amp; <span style={{ color: "#f4af1b" }}>Qualifications</span>
          </Typography>
        </Box>

        {/* Education Card */}
        <Grid container spacing={{ xs: 2.5, md: 3 }} justifyContent="center">
          <Grid item xs={12} md={10} data-aos="fade-up">
            <Card
              className={styles.experienceCard}
              sx={{
                borderLeft: "5px solid #f4af1b !important",
              }}
            >
              <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                <Grid container spacing={1.5} justifyContent="space-between" alignItems="flex-start">
                  <Grid item xs={12} md={8}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                      <Box
                        sx={{
                          width: { xs: 40, sm: 48 },
                          height: { xs: 40, sm: 48 },
                          borderRadius: "12px",
                          bgcolor: "rgba(244, 175, 27, 0.12)",
                          border: "1px solid rgba(244, 175, 27, 0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#f4af1b",
                          flexShrink: 0,
                        }}
                      >
                        <SchoolIcon sx={{ fontSize: { xs: 22, sm: 28 } }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            color: "#ffffff",
                            fontWeight: 800,
                            fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.4rem" },
                            lineHeight: 1.25,
                          }}
                        >
                          Bachelor of Technology (B.Tech)
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            color: "#f4af1b",
                            fontWeight: 700,
                            fontSize: { xs: "0.88rem", sm: "1rem" },
                          }}
                        >
                          Computer Science and Engineering
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body1"
                      sx={{
                        color: "#ced6e0",
                        fontWeight: 600,
                        fontSize: "0.98rem",
                        mb: 0.5,
                      }}
                    >
                      Indira Gandhi Institute of Engineering and Technology, Nellikuzhi
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: "#a4b0be",
                        fontSize: "0.9rem",
                        mb: 2,
                      }}
                    >
                      Affiliated with <strong>Mahatma Gandhi University, Kottayam</strong>
                    </Typography>
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
                        px: 2,
                        py: 0.6,
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      <CalendarTodayIcon sx={{ fontSize: 16 }} />
                      Graduated 2017
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
                      Kerala, India
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    pt: 2,
                    mt: 1,
                    borderTop: "1px solid rgba(244, 175, 27, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    color: "#b0b8c4",
                    fontSize: "0.92rem",
                  }}
                >
                  <MenuBookIcon sx={{ color: "#f4af1b", fontSize: 20 }} />
                  <span>
                    Core focus on Computer Science fundamentals, Software Engineering, Object-Oriented Programming, Data Structures, Database Management Systems, and Web Technologies.
                  </span>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Education;
