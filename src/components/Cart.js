import { useEffect } from "react";
import { Popover, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import cartData from "../cartData";
import ProductInCart from "./ProductInCart";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  cartContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    width: "90%",
  },

  total: {
    display: "flex",
    width: "90%",
    justifyContent: "space-between",
    padding: "1rem",
  },
  ctaButton: {
    width: "90%",
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    textTransform: "uppercase",
    fontSize: "1rem",
    padding: "1rem 2rem",
    margin: "1rem 0",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
});

const Cart = ({
  classes,
  anchorEl,
  isOpen,
  close,
  productList,
  names,
  totalItems,
}) => {
  const data = names.map((name) =>
    cartData.find((product) => product.id === name)
  );

  useEffect(() => {}, [totalItems]);

  const cart = data.map((product, i) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.picture,
      qty: productList && Number(productList[i].qty),
    };
  });

  const handleDelete = () => {
    localStorage.clear();
    window.location.reload();
  };

  console.log("cart", cart);

  return (
    <Popover
      className={classes.root}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <div className={classes.cartContainer}>
        <div className={classes.titleSection}>
          <Typography variant="body1">CART ({totalItems})</Typography>
          <Typography variant="body2" onClick={handleDelete}>
            Remove all
          </Typography>
        </div>
        {cart && cart.map((item, id) => <ProductInCart item={item} key={id} />)}
        <div className={classes.total}>
          <Typography variant="body2">TOTAL</Typography>
          <Typography>$ 5,576</Typography>
        </div>
        <Link to="checkout">
          <button className={classes.ctaButton}>Checkout</button>
        </Link>
      </div>
    </Popover>
  );
};

export default withStyles(styles)(Cart);
