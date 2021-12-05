import { withStyles } from "@mui/styles";
import CategoryHeader from "../components/CategoryHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonial from "../components/Testimonial";
import CategoriesNav from "../components/CategoriesNav";
import productsData from "../productsData.json";
import ProductsPreview from "../components/ProductsPreview";

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
      <Testimonial />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(CategoryPage);
