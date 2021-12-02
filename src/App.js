import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductBooster from "./components/ProductBooster";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Products />
      <ProductBooster />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
