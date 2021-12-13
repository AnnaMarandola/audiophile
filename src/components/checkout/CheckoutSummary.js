import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = (theme) => ({});

const CheckoutForm = ({ classes }) => {
  return (
    <div className={classes.root}>
    <Typography variant="h1">Summary</Typography>
    </div>
  );
};

export default withStyles(styles)(CheckoutForm);
