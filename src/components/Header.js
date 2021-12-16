import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import BGD from "../assets/home/desktop/image-hero.jpg";
import BGM from "../assets/home/mobile/image-header.jpg";
import BGT from "../assets/home/tablet/image-header.jpg";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${BGM})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center top",
    minHeight: "35rem",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${BGT})`,
      backgroundSize: "cover",
      backgroundPosition: "center bottom",
      height: "40rem",
      paddingTop: "10rem",
      alignItems: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${BGD})`,
      backgroundSize: "contain",
      backgroundPosition: "right 25% bottom 45%",
      height: "45rem",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingTop: 0,
    },
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    width: "90%",
    textAlign: "center",
    paddingTop: "5rem",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "25rem",
      alignItems: "flex-start",
      textAlign: "left",
      paddingLeft: "10%",
    },
  },
  title: {
    padding: "1.5rem 0",
    textTransform: "uppercase",
  },
  subtitle: {
    textTransform: "uppercase",
  },
  ctaButton: {
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    fontSize: "1rem",
    padding: "1rem 2rem",
    border: "none",
    marginTop: "2rem",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h3" className={classes.subtitle}>
          New product
        </Typography>
        <Typography variant="h1" className={classes.title}>
          XX99 Mark II Headphones
        </Typography>
        <Typography variant="body1" className={classes.description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Link to="/:headphones/:xx99-mark-two-headphones">
          <button className={classes.ctaButton}>See product</button>
        </Link>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
