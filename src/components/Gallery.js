import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  root: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      padding: "2rem 0",
    },
    [theme.breakpoints.up("lg")]: {
      width: "75%",
      maxHeight: "46rem",
    },
  },
  pics: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      paddingRight: "1rem",
      justifyContent: "space-evenly",
    },
    [theme.breakpoints.up("lg")]: {
      justifyContent: "space-between",
      paddingRight: "1rem",
    },
  },
  bigImage: {
    width: "100%",
    borderRadius: "10px",
    padding: "0.5rem 0",
    [theme.breakpoints.up("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.up("lg")]: {
      width: "60%",
    },
  },
  image: {
    borderRadius: "10px",
    padding: "0.5rem 0",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      paddingRight: "1rem",
    },
  },
});

const Gallery = ({ classes, gallery }) => {
  console.log("gallery", gallery);
  return (
    <div className={classes.root}>
      <div className={classes.pics}>
        <img
          alt=""
          src={gallery.first.mobile}
          className={classes.image}
          srcSet={`${gallery.first.mobile} 600w, ${gallery.first.tablet} 900w, ${gallery.first.desktop} 1200w`}
        />
        <img
          alt=""
          src={gallery.second.mobile}
          className={classes.image}
          srcSet={`${gallery.second.mobile} 600w, ${gallery.second.tablet} 900w, ${gallery.second.desktop} 1200w`}
        />
      </div>
      <img
        alt=""
        src={gallery.third.mobile}
        className={classes.bigImage}
        srcSet={`${gallery.third.mobile} 600w, ${gallery.third.tablet} 900w, ${gallery.third.desktop} 1200w`}
      />
    </div>
  );
};

export default withStyles(styles)(Gallery);
