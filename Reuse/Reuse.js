import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import LaunchIcon from "@mui/icons-material/Launch";
import styles from "../styles/About.module.css";

export function TypographyText(props) {
  return (
    <Typography
      gutterBottom
      sx={{
        fontSize: props.fontSize,
        width: props.width,
        textAlign: props.textAlign,
        color: props.color,
        padding: props.padding,
        textTransform: props.textTransform,
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        margin: props.margin,
        "&:hover": {
          color: props.hovercolor,
        },
      }}
      variant={props.variant}
      component={props.component}
      className={props.className}
    >
      {props.Typography}
    </Typography>
  );
}

export function HomeCard(props) {
  return (
    <Card className={styles.card} sx={{ p: { xs: 1.2, sm: 1.5 }, textAlign: "left", height: "100%" }}>
      <CardContent sx={{ p: { xs: "12px !important", sm: "16px !important" } }}>
        {props.icon && (
          <Box sx={{ mb: 1.2, color: "#f4af1b" }}>
            {props.icon}
          </Box>
        )}
        <Typography
          variant="h5"
          sx={{
            color: "#f4af1b",
            fontWeight: 800,
            fontSize: { xs: "1.1rem", sm: "1.25rem" },
            mb: 0.8,
            letterSpacing: "-0.2px",
          }}
        >
          {props.Typography}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#b0b8c4",
            lineHeight: 1.6,
            fontSize: { xs: "0.85rem", sm: "0.92rem" },
          }}
        >
          {props.Typographybody}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function AboutCard(props) {
  return (
    <Card className={styles.cardAbout} sx={{ p: { xs: 1.5, sm: 2 }, textAlign: "center", height: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
        <Box
          sx={{
            width: { xs: 44, sm: 52 },
            height: { xs: 44, sm: 52 },
            borderRadius: "12px",
            bgcolor: "rgba(244, 175, 27, 0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(244, 175, 27, 0.3)",
          }}
        >
          {props.IconButtoncontent}
        </Box>
      </Box>
      <CardContent sx={{ p: "6px !important" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: { xs: "0.95rem", sm: "1.05rem" },
            mb: 0.5,
          }}
        >
          {props.Typography}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#a4b0be",
            fontSize: { xs: "0.82rem", sm: "0.88rem" },
            lineHeight: 1.5,
          }}
        >
          {props.Typographybody}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function ContactCard(props) {
  return (
    <Card className={styles.cardcontact} sx={{ textAlign: "center", height: "100%", p: 1 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 0.8, mt: 0.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "rgba(244, 175, 27, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(244, 175, 27, 0.35)",
          }}
        >
          {props.IconButtoncontent}
        </Box>
      </Box>
      <CardContent sx={{ p: "4px 8px !important" }}>
        <Typography
          variant="h6"
          sx={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.95rem",
            mb: 0.3,
          }}
        >
          {props.Typography}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#a4b0be",
            fontSize: "0.82rem",
            mb: 1,
            wordBreak: "break-word",
          }}
        >
          {props.Typographybody}
        </Typography>
        {props.href && (
          <Button
            component="a"
            href={props.href}
            target={props.target || "_self"}
            rel="noopener noreferrer"
            size="small"
            sx={{
              color: "#f4af1b",
              fontWeight: 600,
              fontSize: "0.78rem",
              textTransform: "none",
              borderRadius: "6px",
              py: 0.3,
              px: 1.2,
              border: "1px solid rgba(244, 175, 27, 0.3)",
              "&:hover": {
                bgcolor: "rgba(244, 175, 27, 0.15)",
                borderColor: "#f4af1b",
              },
            }}
          >
            {props.btnText || "Send a message"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export function Whatioffercard(props) {
  return (
    <Card className={styles.cardwhatioffer} sx={{ p: { xs: 1.2, sm: 1.5 }, textAlign: "left", height: "100%" }}>
      <CardHeader
        avatar={
          props.icon ? (
            <Box
              sx={{
                width: { xs: 38, sm: 44 },
                height: { xs: 38, sm: 44 },
                borderRadius: "10px",
                bgcolor: "rgba(244, 175, 27, 0.12)",
                border: "1px solid rgba(244, 175, 27, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#f4af1b",
              }}
            >
              {props.icon}
            </Box>
          ) : null
        }
        title={
          <Typography
            variant="h6"
            sx={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: { xs: "1.02rem", sm: "1.15rem" },
            }}
          >
            {props.Typography}
          </Typography>
        }
        className={styles.cardheadershadow}
        sx={{ pb: 1 }}
      />
      <CardContent sx={{ pt: 1.2, px: { xs: 1.5, sm: 2 } }}>
        <Box
          sx={{
            color: "#b0b8c4",
            fontSize: { xs: "0.86rem", sm: "0.92rem" },
            lineHeight: 1.6,
            "& ul": { pl: { xs: 2, sm: 2.5 }, m: 0 },
            "& li": { mb: 0.8 },
          }}
        >
          {props.Typographybody}
        </Box>
      </CardContent>
    </Card>
  );
}

export function Projectcard(props) {
  return (
    <Card className={styles.projectCard}>
      <CardContent
        sx={{
          p: { xs: 2, sm: 2.8 },
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          textAlign: "left",
          "&:last-child": { pb: { xs: 2, sm: 2.8 } },
        }}
      >
        {/* Top Header: Category badge & External Link */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
            minHeight: 32,
          }}
        >
          {props.category ? (
            <Chip
              label={props.category}
              size="small"
              sx={{
                bgcolor: "rgba(244, 175, 27, 0.12)",
                color: "#f4af1b",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.3px",
                border: "1px solid rgba(244, 175, 27, 0.35)",
                borderRadius: "8px",
              }}
            />
          ) : (
            <Box />
          )}

          {props.link && (
            <IconButton
              component="a"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${props.Typography}`}
              size="small"
              sx={{
                color: "#f4af1b",
                bgcolor: "rgba(244, 175, 27, 0.12)",
                border: "1px solid rgba(244, 175, 27, 0.3)",
                transition: "all 0.25s ease",
                "&:hover": {
                  bgcolor: "#f4af1b",
                  color: "#0b0c10",
                  transform: "translateY(-2px)",
                  boxShadow: "0 4px 12px rgba(244, 175, 27, 0.4)",
                },
              }}
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          )}
        </Box>

        {/* Project Title */}
        <Typography
          variant="h6"
          component="h3"
          sx={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: { xs: "1.1rem", sm: "1.2rem" },
            lineHeight: 1.35,
            mb: 0.8,
            letterSpacing: "-0.2px",
          }}
        >
          {props.Typography}
        </Typography>

        {/* Role Subtitle */}
        {props.role && (
          <Typography
            variant="caption"
            sx={{
              color: "#ffda79",
              fontWeight: 600,
              fontSize: "0.82rem",
              display: "block",
              letterSpacing: "0.2px",
              mb: 1.8,
            }}
          >
            {props.role}
          </Typography>
        )}

        {/* Description */}
        {props.description && (
          <Typography
            variant="body2"
            sx={{
              color: "#a4b0be",
              fontSize: "0.88rem",
              lineHeight: 1.65,
              mb: 2.5,
              flexGrow: 1,
            }}
          >
            {props.description}
          </Typography>
        )}

        {/* Tech Stack Pills */}
        {props.tech && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.8,
              mt: "auto",
              pt: 2,
              borderTop: "1px solid rgba(244, 175, 27, 0.15)",
            }}
          >
            {props.tech.map((t, idx) => (
              <Chip
                key={idx}
                label={t}
                size="small"
                sx={{
                  bgcolor: "rgba(244, 175, 27, 0.08)",
                  color: "#ffd470",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  border: "1px solid rgba(244, 175, 27, 0.2)",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    bgcolor: "rgba(244, 175, 27, 0.2)",
                    borderColor: "#f4af1b",
                  },
                }}
              />
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
