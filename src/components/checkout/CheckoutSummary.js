import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import cartData from "../../data/cartData";

const styles = (theme) => ({
  root: {
    display: " flex",
    flexDirection: "column",
    padding: "2rem 0",
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      padding: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "1rem 0 3rem 3rem",
    },
  },
  item: {
    display: "flex",
    padding: "1rem 0",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      padding: "1rem 10%",
    },
  },
  picture: {
    width: "30%",
    borderRadius: "10px",
    [theme.breakpoints.up("sm")]: {
      width: "25%",
    },
  },
  nameAndPrice: {
    marginLeft: "-4rem",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "-15rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "-7rem",
    },
  },
  totalLine: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.5rem 0",
    "&:nth-of-type(6)": {
      paddingTop: "2rem",
      color: theme.palette.primary.orange,
    },
    [theme.breakpoints.up("sm")]: {
      width: "80%",
      padding: "1rem 10%",
    },
  },
});

const CheckoutForm = ({ classes }) => {
  const cartInStorage = { ...localStorage };
  const names = Object.keys(cartInStorage);
  const qts = Object.values(cartInStorage);
  const quantities = qts.map(Number);
  const products = names.map((name, index) => {
    return {
      name: names[index],
      qty: quantities[index],
    };
  });

  const productsData = names.map((name) =>
    cartData.find((product) => product.id === name)
  );

  const cart = productsData.map((product, i) => {
    return {
      ...product,
      qty: products && Number(products[i].qty),
    };
  });

  let totals = cart.map((product) => {
    return product.qty * Number(product.price.replace(",", ""));
  });
  const reducer = (acc, curr) => acc + curr;
  const total = totals.reduce(reducer);

  const shipping = 50;
  const grandTotal = total + shipping;
  const vta = (grandTotal * 20)/100

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        SUMMARY
      </Typography>
      {cart &&
        cart.map((item, id) => (
          <div className={classes.item} key={id}>
            <img
              src={item.picture}
              alt={item.name}
              className={classes.picture}
            />
            <div className={classes.nameAndPrice}>
              <Typography variant="body1">{item.name}</Typography>
              <Typography variant="body2">${item.price}</Typography>
            </div>
            <Typography variant="body2">x{item.qty}</Typography>
          </div>
        ))}
      <div className={classes.totalLine}>
        <Typography variant="body2">TOTAL</Typography>
        <Typography variant="body1">$ {total}</Typography>
      </div>
      <div className={classes.totalLine}>
        <Typography variant="body2">SHIPPING</Typography>
        <Typography variant="body1">$ {shipping}</Typography>
      </div>
      <div className={classes.totalLine}>
        <Typography variant="body2">VAT (INCLUDED)</Typography>
        <Typography variant="body1">$ {vta}</Typography>
      </div>
      <div className={classes.totalLine}>
        <Typography variant="body2">GRAND TOTAL</Typography>
        <Typography variant="body1">$ {grandTotal}</Typography>
      </div>
    </div>
  );
};

export default withStyles(styles)(CheckoutForm);
