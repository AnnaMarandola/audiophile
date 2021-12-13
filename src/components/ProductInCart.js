import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { useState, useEffect } from "react";

const styles = (theme) => ({
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
    width: "8rem",
  },
  name: {
  },
  price: {},
  counter: {
    display: "flex",
    backgroundColor: theme.palette.background.paper
  },
  counterBtn: {
    padding: "0 1rem",
    border: "none",
  }
});

const ProductInCart = ({ classes, item }) => {
  const [newQty, setNewQty] = useState(item.qty);

  useEffect(() => {
    localStorage.setItem(item.id, newQty);
    if (newQty === 0) {
      localStorage.removeItem(item.id);
    }
  }, [item.id, newQty]);


  const handleQty = (e) => {
    if (e.target.value === "increase") {
      setNewQty(newQty + 1);
    } else {
      if (newQty > 0) {
        setNewQty(newQty - 1);
      }
    }
  };

  return (
    <div className={classes.product}>
      <img src={item.image} alt={item.name} className={classes.itemImg} />
      <div className={classes.productInfo}>
        <div className={classes.texts}>
          <Typography variant="body1">{item.name}</Typography>
          <Typography variant="body2">$ {item.price}</Typography>
        </div>
      </div>
      <div className={classes.counter}>
        <button value="decrease" onClick={handleQty} className={classes.counterBtn}>
          -
        </button>
        <Typography className={classes.qty}>{newQty}</Typography>
        <button value="increase" onClick={handleQty} className={classes.counterBtn}>
          +
        </button>
      </div>
    </div>
  );
};

export default withStyles(styles)(ProductInCart);
