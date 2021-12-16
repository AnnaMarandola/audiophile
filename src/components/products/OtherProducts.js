import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem 0 0",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {},
  },
  products: {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    padding: "2rem 0",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "80%"
    },
    [theme.breakpoints.up("lg")]: {
    },
  },
  productCard: {
    padding: "1rem 0",
    [theme.breakpoints.up("sm")]: {
        paddingTop: "5rem",
    },
    [theme.breakpoints.up("lg")]: {
        
    },
  },
  imgContainer: {
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
        padding: "30% 0",
        marginBottom: "2rem"
    },
    [theme.breakpoints.up("lg")]: {
        padding: 0,
    },
  },
  image: {
    height: "10rem",
    borderRadius: "30px",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("lg")]: {
        height: "22rem"
    },
  },
  textAndBtn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "1rem",
    [theme.breakpoints.up("sm")]: {
    },
    [theme.breakpoints.up("lg")]: {},
  },
  navLink: {
    textDecoration: "none",
  },
  ctaButton: {
    backgroundColor: theme.palette.primary.orange,
    color: "white",
    textTransform: "uppercase",
    fontSize: "1rem",
    padding: "1rem 2.5rem",
    marginTop: "1.5rem",
    border: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.pink,
      color: theme.palette.background.default,
    },
  },
});

const OtherProducts = ({ classes, others, category }) => {
  console.log("others", others);
  console.log("category", category)
  return (
    <div className={classes.root}>
      <Typography variant="h2">You may also like</Typography>
      <div className={classes.products}>
        {others.map((other, id) => (
          <div key={id} className={classes.productCard}>
            <div className={classes.imgContainer}>
              <img
                alt={other.name}
                src={other.image.mobile}
                srcSet={`${other.image.mobile} 600w, ${other.image.tablet} 900w, ${other.image.desktop} 1200w`}
                className={classes.image}
              />
            </div>
            <div className={classes.textAndBtn}>
              <Typography variant="h3">{other.name}</Typography>
              <Link
                to={`/:${other.category}/:${other.slug}`}
                className={classes.navLink}
              >
                <button className={classes.ctaButton}>See product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(OtherProducts);
