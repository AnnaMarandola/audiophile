import "./App.css";
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
    </div>
  );
}

export default App;
