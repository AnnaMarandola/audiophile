import { Box, Modal, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import DoneIcon from '@mui/icons-material/Done';

const styles = (theme) => ({
  modalStyle: {
    position: "absolute",
    top: "-20rem",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    boxShadow: 24,
    padding: "2rem",
    width: "70%",
    [theme.breakpoints.up("lg")]: {
        top: "50%",
        width: "30%"

    }
  },
});


const OrderModal = ({ classes, open, handleClose }) => {
  return (
    <div className={classes.root}>
      <Modal
        open={open}
        handleClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box 
        className={classes.modalStyle}>
          <div className={classes.circle}><DoneIcon/></div>
          <Typography variant="h3">THANK YOU FOR YOUR ORDER</Typography>
          <Typography variant="body2">
            You will receive an email confirmation shortly
          </Typography>
          <div className={classes.order}>
            <div className={classes.articlesContainer}>
              <div className={classes.productCard}>
                <img src="" alt="" className={classes.picture} />
                <div className={classes.productInfos}>
                  <Typography variant="body1">product name</Typography>
                  <Typography variant="body2">$ 0000</Typography>
                </div>
                <Typography variant="body2">x 0</Typography>
              </div>
              <Typography variant="body2">and x other items</Typography>
            </div>
            <div className={classes.totalContainer}>
              <Typography variant="body2">GRAND TOTAL</Typography>
              <Typography variant="body2">$ 0000</Typography>
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
