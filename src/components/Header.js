import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import BGD from "../assets/home/desktop/image-hero.jpg";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    backgroundImage: `url(${BGD})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right 35% bottom 45%",
    height: "45rem",
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  textContainer: {
    color: "white",
    width: "25rem",
    paddingLeft: "10%"
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
    fontSize: "1.3rem",
    padding: "1rem 2.5rem",
    marginTop: "3rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    }

  },
  
});

const Header = ({classes}) => {
  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <Typography variant="h5" className={classes.subtitle}>
          New product
        </Typography>
        <Typography variant="h1" className={classes.title}>
          XX99 Mark II Headphones
        </Typography>
        <Typography variant="body2" className={classes.description}>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <button className={classes.ctaButton}>See product</button>
      </div>
    </div>
  );
};

export default withStyles(styles)(Header);
