import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import PORTRAITM from "../assets/shared/mobile/image-best-gear.jpg";
import PORTRAITD from "../assets/shared/desktop/image-best-gear.jpg";
import PORTRAITT from "../assets/shared/tablet/image-best-gear.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    margin: "5rem 5%",
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      margin: "15rem 10%",
      flexDirection: "row-reverse",
    },
  },
  photoGuy: {
    width: "100%",
    borderRadius: "10px",
    backgroundImage: `url(${PORTRAITM})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "18rem",
    margin: "2rem 0",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${PORTRAITT})`,
      height: "35rem",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${PORTRAITD})`,
      height: "45rem",
      width: "50%",

    },
  },
  textContainer: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      padding: "1rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
        width: "50%",
        justifyContent: "center",
        textAlign: "left"
    },
  },
  title: {
    textTransform: "uppercase",
    paddingBottom: "1rem",
    [theme.breakpoints.up("lg")]: {
        width: "70%",
        padding: "2rem 0"
    },
  },
  titleSpan: {
    color: theme.palette.primary.orange,
  },
  text: {
    [theme.breakpoints.up("lg")]: {
        width: "70%",
        padding: "2rem 0",
    },
  },
});

const BestGear = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.photoGuy} />
      <div className={classes.textContainer}>
        <Typography variant="h2" className={classes.title}>
          Bringing you the
          <span variant="h2" className={classes.titleSpan}> best </span>
          audio gear
        </Typography>
        <Typography variant="body2" className={classes.text}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(BestGear);
