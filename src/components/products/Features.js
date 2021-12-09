import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = (theme) => ({
  root: {
    paddingBottom: "4rem",
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "70%",
    },
  },
  title: {
    textTransform: "uppercase",
    paddingBottom: "1.5rem",
  },
});

const Features = ({ classes, features }) => {
  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Features
      </Typography>
      <Typography variant="body2">{features}</Typography>
    </div>
  );
};

export default withStyles(styles)(Features);
