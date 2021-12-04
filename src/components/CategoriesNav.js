import { withStyles } from "@mui/styles";
import HEADPHONES from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import SPEAKERS from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import EARPHONES from "../assets/shared/desktop/image-category-thumbnail-earphones.png";
import { Typography } from "@mui/material";
import ARROW from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "90%",
    margin: "5rem 5%",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      width: "80%",
      margin: "10rem 10%",
    },
  },
  product: {},
  productCard: {
    backgroundColor: theme.palette.background.paper,
    minHeight: "10rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "2rem",
    borderRadius: "10px",
    margin: "4rem 0",
    [theme.breakpoints.up("sm")]: {
      margin: "0 1rem",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "2rem",
      minHeight: "16rem",
    },
  },
  productImage: {
    width: "80%",
    paddingLeft: "10%",
    marginBottom: "-12rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "-7rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginBottom: "-15rem",
      paddingLeft: 0,
      width: "100%",
    },
  },
  productName: {
    padding: "1rem",
  },
  thirdLevelBtn: {
    margin: "2rem",
    color: "grey",
    "&:hover": {
      color: theme.palette.primary.orange,
    },
  },
  link: {
    textDecoration: "none",
  },
});

const products = [
  { name: "headphones", url: "", image: HEADPHONES },
  { name: "speakers", url: "", image: SPEAKERS },
  { name: "earphones", url: "", image: EARPHONES },
];

const Products = ({ classes }) => {
  return (
    <div className={classes.root}>
      {products.map((product, id) => (
        <div className={classes.product} key={id}>
          <img
            src={product.image}
            alt={product.name}
            className={classes.productImage}
          />
          <div className={classes.productCard}>
            <Typography variant="h5" className={classes.productName}>
              {product.name}
            </Typography>
            <Link to={`/:${product.name}`} className={classes.link}>
              <Typography className={classes.thirdLevelBtn} variant="h5">
                shop <img src={ARROW} alt="right arrow" />
              </Typography>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Products);
