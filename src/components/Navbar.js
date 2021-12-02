import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import LOGO from "../assets/shared/desktop/logo.svg";
import CART from "../assets/shared/desktop/icon-cart.svg";
import MobileMenu from "./MobileMenu";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    justifyContent: "center",
    display: "flex",
    padding: "1rem 0",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "1px solid #f1f1f1",
    width: "100%",
    padding: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 0 2rem 0",
      width: "80%",
      
    }
  },
  logo: {
    width: "30%",
    height: "auto",
    marginLeft: "-2rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "-70%",
      width: "20%",

    },
    [theme.breakpoints.up("lg")]: {
      width: "auto",
      marginLeft: 0,

    }

  },
  desktopNav: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex",
    },
  },
  mobileNav: {
    display: "block",
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
  menuItem: {
    color: "white",
    padding: "0 3rem",
    textTransform: "uppercase",
    "&:hover": {
      color: theme.palette.primary.orange,
    },
  },
});

const Navbar = ({ classes }) => {
  return (
    <div className={classes.root}>
      <nav className={classes.topBar}>
        <div className={classes.mobileNav}>
        <MobileMenu />
        </div>
        <img src={LOGO} alt="audiophile" className={classes.logo} />
        <div className={classes.desktopNav}>
          <Typography variant="h6" className={classes.menuItem}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            Headphones
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            Speakers
          </Typography>
          <Typography variant="h6" className={classes.menuItem}>
            Earsphones
          </Typography>
        </div>
        <img className={classes.artIcon} src={CART} alt="cart icons" />
      </nav>
    </div>
  );
};

export default withStyles(styles)(Navbar);
