import { Box, Modal, Typography, Card } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import cartData from "../../data/cartData";

const styles = (theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: 24,
    padding: "2rem",
    width: "70%",
    [theme.breakpoints.up("lg")]: {
      top: "50%",
      width: "30%",
    },
  },
  circle: {
    backgroundColor: theme.palette.primary.orange,
    width: "2rem",
    height: "2rem",
    padding: "1rem",
    borderRadius: "50%",
    textAlign: "center",
  },
  icon: {
    color: "white"
  },
  greetings: {
    paddingTop: "2rem",
  },
  confirmation: {
    padding: "1rem 0",
    textAlign: "center",
  },
  articlesContainer: {
    backgroundColor: theme.palette.background.paper,
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productCard: {
    display: "flex",
    padding: "0 1rem",
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: "1rem"
  },
  productInfos: {
    width: "50%",
  },
  totalContainer: {
    backgroundColor: "black",
    padding: "1rem 0 1rem 4rem",
  },
  grandTotal: {
    color: "white",
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

const OrderModal = ({ classes, open, handleClose }) => {
  const storage = { ...localStorage };
  const names = Object.keys(storage);
  const qts = Object.values(storage);
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

  const article = cart[0];

  const others = quantities.reduce((acc, curr) => acc + curr);

  let totals = cart.map((product) => {
    return product.qty * Number(product.price.replace(",", ""));
  });
  const total = totals.reduce((acc, curr) => acc + curr);
  const grandTotal = total + 50;

  return (
    <div className={classes.root}>
      <Modal
        open={open}
        handleClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <div className={classes.circle}>
            <DoneIcon className={classes.icon} />
          </div>
          <Typography variant="h3" className={classes.greetings}>
            THANK YOU FOR YOUR ORDER
          </Typography>
          <Typography variant="body2" className={classes.confirmation}>
            You will receive an email confirmation shortly
          </Typography>
          <div className={classes.order}>
            <div className={classes.articlesContainer}>
              <Card className={classes.productCard}>
                <img
                  src={article.picture}
                  alt={article.name}
                />
                <div className={classes.productInfos}>
                  <Typography variant="body1">{article.name}</Typography>
                  <Typography variant="body2">$ {article.price}</Typography>
                </div>
                <Typography variant="body2">x {article.qty}</Typography>
              </Card>
              <Typography variant="body2">and {others} other items</Typography>
            </div>
            <div className={classes.totalContainer}>
              <Typography variant="body2">GRAND TOTAL</Typography>
              <Typography className={classes.grandTotal}>$ {grandTotal}</Typography>
            </div>
          </div>
          <Link to="/">
            <button className={classes.ctaButton}>back to home</button>
          </Link>
        </Box>
      </Modal>
    </div>
  );
};

export default withStyles(styles)(OrderModal);
