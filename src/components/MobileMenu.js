import { useState, Fragment } from "react";
import { withStyles } from "@mui/styles";

import { Fade, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AnchorLink from "react-anchor-link-smooth-scroll";

const styles = (theme) => ({
  root: {},
  menuIcon: {
    position: "absolute",
    left: 0,
    color: "white",
  },
  separator: {
    width: "100%",
    margin: "0.5rem 10%",
    color: theme.palette.primary.light,
    border: "1px solid",
  },
  navLink: {
    textDecoration: "none",
    color: "white",
    paddingLeft: "25%",
  },
  menuItem: {
    textTransform: "uppercase",
  },
});

const StyledMenu = withStyles({
  root: {
    "& .MuiPaper-root": {
      backgroundColor: "#161616",
    },
  },
  paper: {
    paddingBottom: "1rem",
    marginTop: "2rem",
    width: "100%",
  },
  list: {
    width: "50%",
  },
})((props) => (
  <Menu
    elevation={20}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

function MobileMenu({ classes }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.root}
      >
        {anchorEl === null ? (
          <MenuIcon
            fontSize="large"
            alt="close cross"
            className={classes.menuIcon}
          />
        ) : (
          <CloseIcon
            fontSize="large"
            alt="close cross"
            className={classes.menuIcon}
          />
        )}
      </Button>
      <StyledMenu
        id="menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={1}
      >
        <AnchorLink className={classes.navLink} href="#home">
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            home
          </MenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#headphones">
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            Headphones
          </MenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#speakers">
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            speakers
          </MenuItem>
        </AnchorLink>
        <hr className={classes.separator} />

        <AnchorLink className={classes.navLink} href="#earphones">
          <MenuItem className={classes.menuItem} onClick={handleClose}>
            earphones
          </MenuItem>
        </AnchorLink>

        <hr className={classes.separator} />
      </StyledMenu>
    </Fragment>
  );
}

export default withStyles(styles)(MobileMenu);
