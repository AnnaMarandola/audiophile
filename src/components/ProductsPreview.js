import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import productsData from "../productsData.json";

const styles = (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productContainer: {
    display: "flex",
    width: "70%",
  },
  imgContainer: {
    width: "100%",
    height: "40rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",

  },
});

// to do:

const Products = ({ classes, category }) => {
  const categoryData = productsData.find(
    (products) => products.category === category
  );
  const products = categoryData.products;

  return (
    <div className={classes.root}>
      {products.map((product, id) => (
        <div className={classes.productContainer} key={id} >
          <div className={classes.imgContainer} style={{ backgroundImage: `url(${product.categoryImage.tablet})`}} />
              {/* <img
                src={product.categoryImage.tablet}
                alt={product.name}
                className={classes.picture}
                key={id}
              />
          </div>
 */}
          <div className={classes.descriptionContainer}>
            <Typography variant="h2">{product.name}</Typography>
            <Typography variant="body1">{product.description}</Typography>
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
