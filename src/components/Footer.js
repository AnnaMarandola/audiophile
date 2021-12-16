import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import LOGO from "../assets/shared/desktop/logo.svg";
import FACEBOOK from "../assets/shared/desktop/icon-facebook.svg";
import TWITTER from "../assets/shared/desktop/icon-twitter.svg";
import INSTAGRAM from "../assets/shared/desktop/icon-instagram.svg";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "4rem",
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
      padding: "0 5%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "4rem",
    },
  },
  decoration: {
    width: "40%",
    height: "5px",
    backgroundColor: theme.palette.primary.orange,
    position: "relative",
    top: 0,
    marginBottom: "4rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  line: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      alignItems: "center",
    },
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  logo: {
    padding: "1rem",
  },
  menuItem: {
    textTransform: "uppercase",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      paddingRight: "3rem",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  navLink: {
    textDecoration: "none",
  },
  textContainer: {
    width: "80%",
    textAlign: "center",
    color: "grey",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      textAlign: "left",
      padding: "0 1rem",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  socialMedia: {
    padding: "1rem",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column-reverse",
      width: "30%",
    },
  },
  copyright: {},
  buttons: {
    display: "flex",
    width: "80%",
    justifyContent: "space-evenly",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      padding: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "4rem",
      width: "30%",
      justifyContent: "space-between",
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.decoration} />
      <div className={classes.line}>
        <img src={LOGO} alt="audiophile" className={classes.logo} />
        <nav className={classes.nav}>
          <Link to="/" className={classes.navLink}>
            <Typography variant="h6" className={classes.menuItem}>
              home
            </Typography>
          </Link>
          <Link to="/:headphones" className={classes.navLink}>
            <Typography variant="h6" className={classes.menuItem}>
              headphones
            </Typography>
          </Link>
          <Link to="/:speakers" className={classes.navLink}>
            <Typography variant="h6" className={classes.menuItem}>
              speakers
            </Typography>
          </Link>
          <Link to="/:earphones" className={classes.navLink}>
            <Typography variant="h6" className={classes.menuItem}>
              earphones
            </Typography>
          </Link>
        </nav>
      </div>
      <div className={classes.line}>
        <div className={classes.textContainer}>
          <Typography className={classes.text}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
        </div>
        <div className={classes.socialMedia}>
          <Typography className={classes.copyright}>
            Copyright 2021. All Rights Reserved
          </Typography>
          <div className={classes.buttons}>
            <img src={FACEBOOK} alt="facebook" />
            <img src={TWITTER} alt="TWITTER" />
            <img src={INSTAGRAM} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Footer);
