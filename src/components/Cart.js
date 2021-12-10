import { Popover, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import cartData from "../cartData";

const styles = (theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  cartContainer: {
    // padding: "1rem"
    backgroundColor: "white",
  },
  titleSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem",
  },
  product: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
  itemImg: {
    width: "20%",
    borderRadius: "10px",
    backgroundColor: theme.palette.background.paper,
  },
  texts: {
    width: "7rem",
  },
  name: {},
  price: {},
  counter: {
    display: "flex",
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
      name: product.name,
      price: product.price,
      image: product.picture,
      qty: productList[i].qty,
    };
  });

  console.log("cart", cart);

  return (
    <Popover
      className={classes.root}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={close}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <div className={classes.cartContainer}>
        <div className={classes.titleSection}>
          <Typography variant="body1">CART (x)</Typography>
          <Typography variant="body2">Remove all</Typography>
        </div>
        {cart &&
          cart.map((item, id) => (
            <div key={id} className={classes.product}>
              <img
                src={item.image}
                alt={item.name}
                className={classes.itemImg}
              />
              <div className={classes.productInfo}>
                <div className={classes.texts}>
                  <Typography variant="body1">{item.name}</Typography>
                  <Typography variant="body2">{item.price}</Typography>
                </div>
              </div>
              <div className={classes.counter}>
                <button>-</button>
                <Typography>{item.qty}</Typography>
                <button>+</button>
              </div>
            </div>
          ))}
        <div className={classes.total}>
          {" "}
          <Typography variant="body2">TOTAL</Typography>
          <Typography>$ 5,576</Typography>
        </div>
        <button className={classes.ctaButton}>Checkout</button>
      </div>
    </Popover>
  );
};

export default withStyles(styles)(Cart);
