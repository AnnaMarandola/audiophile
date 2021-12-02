import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import ZX9 from "../assets/home/desktop/image-speaker-zx9.png";
import ZX9T from "../assets/home/tablet/image-speaker-zx9.png";
import ZX9M from "../assets/home/mobile/image-speaker-zx9.png";
import CIRCLES from "../assets/home/desktop/pattern-circles.svg";
import ZX7 from "../assets/home/desktop/image-speaker-zx7.jpg";
import ZX7M from "../assets/home/mobile/image-speaker-zx7.jpg";
import ZX7T from "../assets/home/tablet/image-speaker-zx7.jpg";
import YX1 from "../assets/home/desktop/image-earphones-yx1.jpg";
import YX1M from "../assets/home/mobile/image-earphones-yx1.jpg";
import YX1T from "../assets/home/tablet/image-earphones-yx1.jpg";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    margin: "5rem 5%",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      margin: "5rem 10%",
    },
  },
  zx9Speaker: {
    backgroundImage: `url(${CIRCLES})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom 8rem right 50%",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.primary.orange,
    borderRadius: "10px",
    [theme.breakpoints.up("sm")]: {
      paddingBottom: "2rem",
      margin: "2rem 0"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundSize: "contain",
      flexDirection: "row",
      paddingTop: "8rem",
      height: "30rem",
      backgroundPosition: "top  left 10%",
      justifyContent: "space-around",
      overflow: "hidden"
    },
  },
  zx9Img: {
    padding: "4rem 5rem 0rem 5rem",
    [theme.breakpoints.up("sm")]: {
      margin: "0 10rem 2rem 10rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      margin: "0 2rem -3rem 0rem",
      width: "25%",
    },
  },
  textContainer: {
    color: "white",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 1.5rem",
    [theme.breakpoints.up("sm")]: {
      padding: "3rem 15rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
      alignItems: "flex-start",
      width: "30%",
      textAlign: "left",
    },
  },
  title: {
    textTransform: "uppercase",
  },
  description: {
    padding: "2rem 0",
  },
  secondLevelBtn: {
    backgroundColor: theme.palette.primary.main,
    textTransform: "uppercase",
    color: "white",
    padding: "1rem 2rem",
    border: "none",
    "&:hover": {
      backgroundColor: "grey",
    },
    "&:nth-child(2)": {
      color: "black",
      backgroundColor: "transparent",
      border: "1px solid black",
      marginTop: "2rem ",
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    },
  },



  zx7Speaker: {
    height: "15rem",
    backgroundImage: `url(${ZX7M})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    margin: "1rem 0",
    display: "flex",
    alignItems: "center",
    padding: "2rem",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${ZX7T})`,
      height: "20rem",
      padding: "4rem",
      marginBottom: "3rem"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${ZX7})`,
    },
  },
  yx1Earphone: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
    },
  },
  yx1Img: {
    height: "12rem",
    backgroundImage: `url(${YX1M})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${YX1T})`,
      width: "50%",
      height: "25rem",
      marginRight: "2rem"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundImage: `url(${YX1})`,
    },
  },
  yx1TextContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    margin: "1rem 0",
    borderRadius: "10px",
    height: "8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      height: "21rem",
      margin: 0,
    },
    [theme.breakpoints.up("lg")]: {
    },

  },
});

const ProductBooster = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.zx9Speaker}>
        <img
          src={ZX9}
          srcSet={`${ZX9M} 600w, ${ZX9T} 900w, ${ZX9} 1200w`}
          alt="zx9 speaker"
          className={classes.zx9Img}
        />
        <div className={classes.textContainer}>
          <Typography variant="h1" className={classes.title}>
            zx9
          </Typography>
          <Typography variant="h1" className={classes.title}>
            speaker
          </Typography>
          <Typography variant="body1" className={classes.description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </Typography>
          <button className={classes.secondLevelBtn}>see product</button>
        </div>
      </div>

      <div className={classes.zx7Speaker}>
        <div>
          <Typography variant="h2" className={classes.title}>
            zx7 speaker
          </Typography>
          <button className={classes.secondLevelBtn}>see product</button>
        </div>
      </div>

      <div className={classes.yx1Earphone}>
        <div className={classes.yx1Img} />
        <div className={classes.yx1TextContainer}>
          <div>
            <Typography variant="h2" className={classes.title}>
              yx1 earphones
            </Typography>
            <button className={classes.secondLevelBtn}>see product</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default withStyles(styles)(ProductBooster);
