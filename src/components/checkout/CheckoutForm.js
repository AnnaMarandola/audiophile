import { useState } from "react";
import { withStyles } from "@mui/styles";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CheckoutSummary from "./CheckoutSummary";
import OrderModal from "./OrderModal";

const styles = (theme) => ({
  root: {
    padding: "4rem 2rem 6rem",
    display: " flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: theme.palette.background.paper,
      flexDirection: "row",
      padding: "4rem",
      justifyContent: "space-evenly",
    },
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      padding: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "3rem 0 0rem 3.5rem",
    },
  },
  content: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  formCard: {
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "white",
      borderRadius: "10px",
      width: "50%",
      paddingBottom: "2rem",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem 4rem",
    },
    [theme.breakpoints.up("lg")]: {},
  },
  section: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
    },
  },
  sectionTitle: {
    paddingTop: "2rem",
    color: theme.palette.primary.orange,
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 0",
    },
  },
  inputField: {
    margin: "1rem 0",
    [theme.breakpoints.up("sm")]: {},
  },
  input: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
  },
  summaryCard: {
    [theme.breakpoints.up("lg")]: {
      width: "30%",
      backgroundColor: "white",
      borderRadius: "10px",
    },
  },
  ctaButton: {
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    textTransform: "uppercase",
    fontSize: "1rem",
    padding: "1.2rem 2rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "2rem 25%",
    },
  },
});

const CheckoutForm = ({ classes }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [adress, setAdress] = useState();
  const [zipCode, setZipCode] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();
  const [payementMethod, setPayementMethod] = useState();
  const [id, setId] = useState();
  const [pin, setPin] = useState();

  const [orderSent, setOrderSent] = useState(false);

  const [open, setOpen] = useState(false);
  const handleCloseModal = () => setOpen(false);

  const handleSubmit = () => {
    setOrderSent(true);
    setOpen(true);
  };

  console.log("orderSent", orderSent);

  return (
    <div className={classes.root}>
      <div className={classes.formCard}>
        <Typography variant="h3" className={classes.title}>
          CHECKOUT
        </Typography>
        <div className={classes.content}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Typography variant="h6" className={classes.sectionTitle}>
              Billing details
            </Typography>
            <div className={classes.section}>
              <TextField
                required
                variant="outlined"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="Email Adress"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
            </div>
            <Typography variant="h6" className={classes.sectionTitle}>
              Shipping info
            </Typography>
            <div className={classes.section}>
              <TextField
                required
                variant="outlined"
                label="Your Adress"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                required
                variant="outlined"
                label="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
            </div>
            <Typography variant="h6" className={classes.sectionTitle}>
              Payment Details
            </Typography>
            <Typography variant="body1" className={classes.sectionTitle}>
              Payment Method *
            </Typography>
            <div className={classes.section}>
              <RadioGroup>
                <FormControlLabel
                  value="e-Money"
                  label="e-Money"
                  control={
                    <Radio
                      onChange={(e) => setPayementMethod(e.target.value)}
                    />
                  }
                />
                <FormControlLabel
                  value="Cash on Delivery"
                  label="Cash on Delevery"
                  control={
                    <Radio
                      onChange={(e) => setPayementMethod(e.target.value)}
                    />
                  }
                />
              </RadioGroup>
              <TextField
                variant="outlined"
                label="e-Money Number"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
              <TextField
                variant="outlined"
                label="e-Money PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className={classes.input}
                InputProps={{
                  className: classes.inputField,
                }}
              />
            </div>
          </form>
        </div>
      </div>
      <div className={classes.summaryCard}>
        <CheckoutSummary />
        <button
          type="submit"
          className={classes.ctaButton}
          onClick={handleSubmit}
        >
          CONTINUE & PAY
        </button>
      <OrderModal open={open} handleClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default withStyles(styles)(CheckoutForm);
