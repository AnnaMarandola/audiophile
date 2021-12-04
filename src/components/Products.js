import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({});

const Products = ({ classes, category, products }) => {
  console.log("products", products);
  return (
    <div className={classes.root}>
      {products.map((product, id) => (
        <div className={classes.productContainer} key={id}>
            <div className={classes.imgContainer}/>
            <div className={classes.descriptionContainer}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Link to={`/:${category}/:${product.slug}`} className={classes.link}>
            <button className={classes.CTAButton}>see product</button>
            </Link>
            </div>
            
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(Products);
