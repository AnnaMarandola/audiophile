import { withStyles } from "@material-ui/styles";
import CategoriesNav from "../components/CategoriesNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestGear from "../components/BestGear";
import ProductDetails from "../components/ProductDetails";
import productsData from "../productsData";

// to do :
//récupérer le produit dans les params d'url
//importer productsData.json
//import productsData from '../productsData';
//récuper les data du produit de l'url

const styles = (theme) => ({});

const ProductPage = ({ classes, match }) => {
  const productInPath = match.params.product.substr(1);
  const categoryInPath = match.params.category.substr(1);
  
  const categoryData = productsData.find(
    (products) => products.category === categoryInPath
  );
  console.log("categoryData", categoryData);

  const products = categoryData && categoryData.products
  console.log("products", products);

  const productData = categoryData && products && products.find( (product) => product.slug === productInPath)
  console.log("productData", productData)
  return (
    <div className={classes.root}>
      <Navbar />
      <ProductDetails product={productData} />
      <CategoriesNav />
      <BestGear />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(ProductPage);
