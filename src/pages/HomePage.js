import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import CategoriesNav from "../components/CategoriesNav";
import ProductBooster from "../components/ProductBooster";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CategoriesNav />
      <ProductBooster />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default HomePage;
