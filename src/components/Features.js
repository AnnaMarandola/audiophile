import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const styles = (theme) => ({
    root: {

    },
})

const Features =({classes, features}) => {
    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.title}>Features</Typography>
            <Typography variant="body1">{features}</Typography>
        </div>
    )
};

export default withStyles(styles)(Features);
