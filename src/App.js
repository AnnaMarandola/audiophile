import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:category" component={CategoryPage} />
          <Route exact path="/:category/:produit" component={ProductPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
