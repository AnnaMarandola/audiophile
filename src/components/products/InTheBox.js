import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = (theme) => ({
  root: {
    paddingBottom: "4rem",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      align: "space-between",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "column",
    },
  },
  title: {
    textTransform: "uppercase",
    paddingBottom: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "25%",
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: 0,
    },

  },
  boxContent: {
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      padding: 0,
    }
  },
  line: {
    display: "flex",
    width: "80%",
    padding: ".3rem 0",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
  },
  quantity: {
    paddingRight: "2rem",
    color: theme.palette.primary.orange,
  },
});

const InTheBox = ({ classes, includes }) => {
  console.log("inTheBox", includes);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        In the Box
      </Typography>
      <div className={classes.boxContent}>
        {includes.map((item, id) => (
          <div key={id} className={classes.line}>
            <Typography className={classes.quantity}>
              {item.quantity} x
            </Typography>
            <Typography className={classes.item} variant="body2">
              {item.item}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(InTheBox);
