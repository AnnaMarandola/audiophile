import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = (theme) => ({
  root: {},
  box: {
      display: "flex",
      width: "80%"
  },
  quantity: {
      paddingRight: "4rem"
  }
});

const InTheBox = ({ classes, includes }) => {
  console.log("inTheBox", includes);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        In the Box
      </Typography>
      {includes.map((item, id) => (
        <div key={id} className={classes.box}>
          <Typography className={classes.quantity}>{item.quantity} x</Typography>
          <Typography className={classes.item}>{item.item}</Typography>
        </div>
      ))}
    </div>
  );
};

export default withStyles(styles)(InTheBox);
