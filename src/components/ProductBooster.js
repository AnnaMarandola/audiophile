import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import ZX9 from "../assets/home/desktop/image-speaker-zx9.png";
import CIRCLES from "../assets/home/desktop/pattern-circles.svg";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    width: "80%",
    margin: "5rem 10%",
  },
  zx9Speaker: {
    backgroundImage: `url(${CIRCLES})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    display: "flex",
    height: "35rem",
    paddingTop: "10rem",
    backgroundColor: theme.palette.primary.orange,
    borderRadius: "10px",
  },
  zx9Img: {
    padding: "0 5rem",
  },
  textContainer: {
    padding: "0 10rem",
  },
  description: {
    padding: "3rem 0",
  },
  secondLevelBtn: {
      backgroundColor: theme.palette.primary.main,
      color: "white",
      padding: "1rem 2rem",
      border: "none",
      "&:hover": {
          backgroundColor: "grey"
      }
  }
});

const ProductBooster = ({ classes }) => {
  return (
    <div className={classes.root}>
      <div className={classes.zx9Speaker}>
        <img src={ZX9} alt="zx9 speaker" className={classes.zx9Img} />
        <div className={classes.textContainer}>
          <Typography variant="h1">zx9</Typography>
          <Typography variant="h1">speaker</Typography>
          <Typography variant="body1" className={classes.description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </Typography>
          <button className={classes.secondLevelBtn}>see product</button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductBooster);
