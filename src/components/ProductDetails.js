import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Features from "./Features";
import InTheBox from "./InTheBox";

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
  imgAndDescrpition: {
    width: "90%",
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row-reverse",
      width: "80%",
      justifyContent: "space-around",
      "&:nth-of-type(2n + 1)": {
        flexDirection: "row",
        padding: "10rem 0",
      },
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
    },
    [theme.breakpoints.up("lg")]: {
      height: "35rem",
      width: "40%",
    },
  },
  descriptionContainer: {
    padding: "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      textAlign: "left",
      alignItems: "flex-start",
      justifyContent: "center",
      width: "40%",
    },
  },
  new: {
    textTransform: "uppercase",
    color: theme.palette.primary.orange,
  },
  name: {
    padding: "1rem",
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
  CTAButton: {
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    textTransform: "uppercase",
    fontSize: "1rem",
    padding: "1rem 2.5rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
  counter: {
    display: "flex",
    backgroundColor: theme.palette.background.paper,
    margin: "2rem 0",
    width: "fit-content",
  },
  counterBtn: {
    padding: "1rem",
    border: "none",
  },
  count: {
    padding: " 1rem 2rem",
  },
});

const ProductDetails = ({ classes, product }) => {
  return (
    <div className={classes.root}>
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
          <Typography variant="h6">$ {product.price}</Typography>
          <div className={classes.btns}>
            <div className={classes.counter}>
              <button className={classes.counterBtn}>-</button>
              <Typography className={classes.count} variant="h6">
                1
              </Typography>
              <button className={classes.counterBtn}>+</button>
            </div>
            <button className={classes.CTAButton}>add to cart</button>
          </div>
        </div>
      </div>
      <div className={classes.featuresAndBox}>
        <Features features={product.features} />
        <InTheBox includes={product.includes}/>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductDetails);
