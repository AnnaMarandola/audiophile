import { withStyles } from "@mui/styles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategoriesNav from "../components/CategoriesNav";
import ProductBooster from "../components/ProductBooster";
import BestGear from "../components/BestGear";

const styles = (theme) => ({
  root: {
    width: "100%"
  }
})
const HomePage = ({classes}) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <Header />
      <CategoriesNav />
      <ProductBooster />
      <BestGear/>
      <Footer />
    </div>
  );
};

export default withStyles(styles)(HomePage);
