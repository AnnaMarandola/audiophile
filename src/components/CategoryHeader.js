import { Typography } from "@material-ui/core";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});

const CategoryHeader = ({ classes, category }) => {
  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(CategoryHeader);
