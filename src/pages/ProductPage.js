import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import CategoriesNav from "../components/CategoriesNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";

const styles = (theme) => ({});

const ProductPage = ({ classes, match }) => {
  let path = match.params;
  console.log("category product page", path);

  return (
    <div className={classes.root}>
      <Navbar />
      <Typography>{path.category} {path.produit}</Typography>
      <CategoriesNav />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(ProductPage);
