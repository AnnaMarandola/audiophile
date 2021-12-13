import { withStyles } from "@mui/styles";
import { Badge, Typography } from "@mui/material";
import LOGO from "../assets/shared/desktop/logo.svg";
import CART from "../assets/shared/desktop/icon-cart.svg";
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "./Cart";

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
    alignItems: "center",
    borderBottom: "1px solid #f1f1f1",
    width: "100%",
    padding: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 0 2rem 0",
      width: "80%",
    },
  },
  logo: {
    height: "auto",
    marginLeft: "-1rem",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "auto",
      marginLeft: 0,
    },
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
  link: {
    textDecoration: "none",
  },
  cartIcon: {
    padding: "0.4rem",
  },
});

const Navbar = ({ classes }) => {
  const [cartOpen, setcartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [totalItems, setTotalItems] = useState();

  const productList = { ...localStorage };


  const names = Object.keys(productList);
  const quantities = Object.values(productList);
  const products = names.map((name, index) => {
    return {
      name: names[index],
      qty: quantities[index],
    };
  });

  useEffect(() => {
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    setTotalItems(quantities.reduce(sum));
  }, [quantities]);

  console.log("quantites in Navbar", quantities);
  console.log("totalItems", totalItems);

  const handleToogle = (e) => {
    if (!cartOpen) {
      setcartOpen(true);
      setAnchorEl(e.currentTarget);
    } else {
      setcartOpen(false);
      setAnchorEl(null);
    }
  };

  return (
    <div className={classes.root}>
      <nav className={classes.topBar}>
        <div className={classes.mobileNav}>
          <MobileMenu />
        </div>
        <Link to="/" className={classes.link}>
          <img src={LOGO} alt="audiophile" className={classes.logo} />
        </Link>
        <div className={classes.desktopNav}>
          <Link to="/" className={classes.link}>
            <Typography variant="h6" className={classes.menuItem}>
              Home
            </Typography>
          </Link>
          <Link to="/:headphones" className={classes.link}>
            <Typography variant="h6" className={classes.menuItem}>
              Headphones
            </Typography>
          </Link>
          <Link to="/:speakers" className={classes.link}>
            <Typography variant="h6" className={classes.menuItem}>
              Speakers
            </Typography>
          </Link>
          <Link to="/:earsphones" className={classes.link}>
            <Typography variant="h6" className={classes.menuItem}>
              Earsphones
            </Typography>
          </Link>
        </div>
        <Badge badgeContent={totalItems} color="warning">
          <img
            className={classes.cartIcon}
            src={CART}
            alt="cart icons"
            onClick={handleToogle}
          />
        </Badge>
      </nav>
      {cartOpen && (
        <Cart
          anchorEl={anchorEl}
          isOpen={cartOpen}
          close={handleToogle}
          productList={products}
          names={names}
          totalItems={totalItems}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(Navbar);
