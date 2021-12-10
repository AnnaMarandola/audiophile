import { useState } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Features from "./Features";
import InTheBox from "./InTheBox";
import Gallery from "./Gallery";

const styles = (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "5rem 0",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  navlink: {
    textDecoration: "none",
    textAlign: "left",
    position: "absolute",
    left: "5%",
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {
      padding: "0",
    },
    [theme.breakpoints.up("lg")]: {
      left: "10%",
      padding: 0,
    },
  },
  imgAndDescrpition: {
    width: "90%",
    padding: "4rem 0",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      justifyContent: "space-around",
    },
  },
  imgContainer: {
    width: "100%",
    height: "22rem",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom 65%",
    [theme.breakpoints.up("sm")]: {
      height: "41rem",
      padding: "0 3rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "40%",
      height: "44rem",
    },
    [theme.breakpoints.up("xl")]: {
      height: "52rem",
    },
  },
  descriptionContainer: {
    padding: "3rem 0 0 0",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "center",
      width: "40%",
      paddingTop: 0,
    },
  },
  new: {
    textTransform: "uppercase",
    color: theme.palette.primary.orange,
  },
  name: {
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 0",
    },
  },
  description: {
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {},
  },
  btns: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  CTAButton: {
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    textTransform: "uppercase",
    fontSize: "1rem",
    padding: "1.2rem 1.5rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
  counter: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    margin: "1.5rem 0",
    width: "fit-content",
    [theme.breakpoints.up("sm")]: {
      margin: "2rem 0",
    },
  },
  counterBtn: {
    padding: "1rem",
    border: "none",
    [theme.breakpoints.up("sm")]: {},
  },
  count: {
    padding: "1rem 1rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 2rem",
    },
  },
  featuresAndBox: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "90%",
      padding: "4rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-around",
    },
  },
});

const ProductDetails = ({ classes, product, category }) => {
  const [qty, setQty] = useState(1);

  const handleCart = () => {
    localStorage.setItem(product.name, qty);
  };
  
  return (
    <div className={classes.root}>
      <Link to={`/:${category}`} className={classes.navlink}>
        <Typography variant="body2">Go back</Typography>
      </Link>
      <div className={classes.imgAndDescrpition}>
        <div
          className={classes.imgContainer}
          style={{ backgroundImage: `url(${product.categoryImage})` }}
        />
        <div className={classes.descriptionContainer}>
          {product.new && (
            <Typography variant="h6" className={classes.new}>
              New product
            </Typography>
          )}
          <Typography variant="h2" className={classes.name}>
            {product.name}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {product.description}
          </Typography>
          <Typography variant="h5" className={classes.price}>
            $ {product.price}
          </Typography>
          <div className={classes.btns}>
            <div className={classes.counter}>
              <button
                className={classes.counterBtn}
                onClick={() => setQty(qty - 1)}
              >
                -
              </button>
              <Typography className={classes.count} variant="h6">
                {qty}
              </Typography>
              <button
                className={classes.counterBtn}
                onClick={() => setQty(qty + 1)}
              >
                +
              </button>
            </div>
            <button className={classes.CTAButton} onClick={handleCart}>
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className={classes.featuresAndBox}>
        <Features features={product.features} />
        <InTheBox includes={product.includes} />
      </div>
      <Gallery gallery={product.gallery} />
    </div>
  );
};

export default withStyles(styles)(ProductDetails);
