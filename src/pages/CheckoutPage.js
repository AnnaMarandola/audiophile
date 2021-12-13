import { withStyles } from "@mui/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutForm from "../components/checkout/CheckoutForm";
import CheckoutSummary from "../components/checkout/CheckoutSummary";

const styles = (theme) => ({});

const CheckoutPage = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Navbar />
      <CheckoutForm />
      <CheckoutSummary />
      <Footer />
    </div>
  );
};

export default withStyles(styles)(CheckoutPage);
