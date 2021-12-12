import { Popover, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import cartData from "../cartData";
import ProductInCart from "./ProductInCart";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  cartContainer: {
    backgroundColor: "white",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },

  total: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
});

const Cart = ({ classes, anchorEl, isOpen, close, productList, names }) => {
  const data = names.map((name) =>
    cartData.find((product) => product.id === name)
  );


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
    window.location.reload()
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
          <Typography variant="body1">CART (x)</Typography>
          <Typography variant="body2" onClick={handleDelete}>
            Remove all
          </Typography>
        </div>
        {cart && cart.map((item, id) => <ProductInCart item={item} key={id}/>)}
        <div className={classes.total}>
          <Typography variant="body2">TOTAL</Typography>
          <Typography>$ 5,576</Typography>
        </div>
        <button className={classes.ctaButton}>Checkout</button>
      </div>
    </Popover>
  );
};

export default withStyles(styles)(Cart);
