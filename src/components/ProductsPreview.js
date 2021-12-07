import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import productsData from "../productsData";

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
  productContainer: {
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
    [theme.breakpoints.up("xl")]: {
      height: "50rem",
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
    marginTop: "1.5rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
});

// to do:

const Products = ({ classes, category, match }) => {
  const categoryData = productsData.find(
    (products) => products.category === category
  );
  const products = categoryData.products;

  return (
    <div className={classes.root}>
      {products.map((product, id) => (
        <div className={classes.productContainer} key={id}>
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
            <Link
              to={`/:${category}/:${product.slug}`}
              className={classes.link}
            >
              <button className={classes.CTAButton}>see product</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Products);
