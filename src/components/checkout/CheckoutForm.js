import { withStyles } from "@mui/styles";
import {
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import CheckoutSummary from "./CheckoutSummary";

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
      padding: "3rem 7.5%",
      border: "10px solid blue",
    },
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      padding: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 4rem",
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
  form: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "2rem 4rem",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
    },
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
  summaryContainer: {
    [theme.breakpoints.up("lg")]: {
      width: "30%",
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
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        CHECKOUT
      </Typography>

      <div className={classes.content}>
        <form className={classes.form}>
          <Typography variant="h6" className={classes.sectionTitle}>
            Billing details
          </Typography>
          <div className={classes.section}>
            <TextField
              required
              variant="outlined"
              label="Name"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              required
              variant="outlined"
              label="Email Adress"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              required
              variant="outlined"
              label="Phone Number"
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
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              required
              variant="outlined"
              label="ZIP Code"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              required
              variant="outlined"
              label="City"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              required
              variant="outlined"
              label="Country"
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
                control={<Radio />}
              />
              <FormControlLabel
                value="Cash on Delivery"
                label="Cash on Delevery"
                control={<Radio />}
              />
            </RadioGroup>
            <TextField
              variant="outlined"
              label="e-Money Number"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
            <TextField
              variant="outlined"
              label="e-Money PIN"
              className={classes.input}
              InputProps={{
                className: classes.inputField,
              }}
            />
          </div>
        </form>

        <div className={classes.summaryContainer}>
          <CheckoutSummary />
          <button className={classes.ctaButton}>CONTINUE & PAY</button>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(CheckoutForm);
