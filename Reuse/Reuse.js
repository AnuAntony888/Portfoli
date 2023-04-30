import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import styles from "../styles/About.module.css";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import TextField from "@mui/material/TextField";
import CardHeader from "@mui/material/CardHeader";
export function HomeCard(props) {
  return (
    <Card className={styles.card}
   >
      <CardContent>
        <div data-aos="zoom-in">
          <TypographyText
            variant="h5"
            component="div"
            color={"#F4AF1B"}
            fontWeight={"bolder"}
            Typography={props.Typography}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TypographyText
            fontSize="14"
            component="div"
            color={"white"}
            fontWeight={"bolder"}
            Typography={props.Typographybody}
          />
        </div>
      </CardContent>
    </Card>
  );
}
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

export function TextfieldType(props) {
  return (
    <>
      <TextField
        sx={{
          border: "1px solid #f4af1b",
          color: "yellowgreen",
          bgcolor: "white",
        }}
        name={props.name}
        type={props.type}
        label={props.label}
        fullWidth
      />
    </>
  );
}

export function AboutCard(props) {
  return (
    <Card className={styles.cardAbout}>
      <CardMedia>
        <IconButton>{props.IconButtoncontent}</IconButton>
      </CardMedia>
      <CardContent>
        <div data-aos="zoom-in">
          <TypographyText
            variant="h5"
            component="div"
            color={"#FFA62B"}
            fontWeight={"bolder"}
            className={props.className}
            Typography={props.Typography}
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TypographyText
            fontSize="14"
            component="div"
            color={"white"}
            fontWeight={"bolder"}
            Typography={props.Typographybody}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function ContactCard(props) {
  return (
    <Card className={styles.cardcontact}>
      <CardMedia>
        <IconButton>{props.IconButtoncontent}</IconButton>
      </CardMedia>
      <CardContent>
        <div data-aos="zoom-in">
          <TypographyText
            variant="h5"
            component="div"
            color={"#FFA62B"}
            fontWeight={"bolder"}
            className={props.className}
            Typography={props.Typography}
          />
        </div>

        <TypographyText
          fontSize="14"
          component="div"
          color={"white"}
          fontWeight={"bolder"}
          Typography={props.Typographybody}
        />
        <a href={props.href} style={{ color: "#FFA62B" }}>
          Send a message
        </a>
      </CardContent>
    </Card>
  );
}

export function Testmonialcard(props) {
  return (
    <Card sx={{ p: "5%", bgcolor: "transparent", margin: "auto" }}>
      <CardMedia
        component="img"
        sx={{ width: "50%", margin: "auto" }}
        image={props.image}
        alt="Paella dish"
      />
    </Card>
  );
}

export function Whatioffercard(props) {
  return (
    <Card className={styles.cardwhatioffer}>
      <CardHeader
        title={
          <div data-aos="zoom-in">
            <TypographyText
              variant="h5"
              component="div"
              color={"#FFA62B"}
              fontWeight={"bolder"}
              className={props.className}
              Typography={props.Typography}
            />
          </div>
        }
        className={styles.cardheadershadow}
      />
      <CardContent>
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <TypographyText
            fontSize="14"
            component="div"
            color={"white"}
            textAlign={"left"}
            fontWeight={"bolder"}
            Typography={props.Typographybody}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export function Projectcard(props) {
  return (
    <Card className={styles.card} sx={{ height: "400px" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.image}
        title="green iguana"
        sx={{ height: "280px" }}
      />
      <CardContent>
        <div data-aos="zoom-in">
          <TypographyText
            variant="h6"
            component="div"
            color={"#FFA62B"}
            fontWeight={"bolder"}
            className={props.className}
            Typography={props.Typography}
          />
        </div>
      </CardContent>
    </Card>
  );
}
