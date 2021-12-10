import { withStyles } from "@mui/styles";
import CategoriesNav from "../components/CategoriesNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BestGear from "../components/BestGear";
import ProductDetails from "../components/products/ProductDetails";
import productsData from "../productsData";
import OtherProducts from "../components/products/OtherProducts";
import { useParams } from "react-router";

const styles = (theme) => ({});

const ProductPage = ({ classes, match }) => {
  window.scrollTo(0, 0);

  const { product } = useParams();
  const { category } = useParams();
  const productInPath = product.substr(1);
  const categoryInPath = category.substr(1);

  const categoryData = productsData.find(
    (products) => products.category === categoryInPath
  );

  const products = categoryData && categoryData.products;

  const productData = products.find(
    (product) => product.slug === productInPath
  );

  return (
    <div className={classes.root}>
      <Navbar />
      <ProductDetails product={productData} category={categoryInPath} />
      <OtherProducts others={productData.others} category={categoryInPath} />
      <CategoriesNav />
      <BestGear />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(ProductPage);
