import { withStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutForm from "../components/checkout/CheckoutForm";

const styles = (theme) => ({
  root: {
  }
});

const CheckoutPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <CheckoutForm />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(CheckoutPage);
