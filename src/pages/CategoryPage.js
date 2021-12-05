import { withStyles } from "@mui/styles";
import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CategoriesNav from "../components/CategoriesNav";
import productsData from "../productsData.js";
import ProductsPreview from "../components/ProductsPreview";
import BestGear from "../components/BestGear";

const styles = (theme) => ({});

const CategoryPage = ({ classes, match }) => {
  let pathCategory = match.params.category;
  const category = pathCategory.substr(1);
  const categoryData = productsData.find(
    (products) => products.category === category
  );
  const products = categoryData.products;

  return (
    <div className={classes.root}>
      <Navbar />
      <CategoryHeader category={category} />
      <ProductsPreview category={category} products={products} />
      <CategoriesNav />
      <BestGear/>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(CategoryPage);