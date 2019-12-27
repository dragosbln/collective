import React from "react";
import { LinearProgress, withStyles } from "@material-ui/core";
import styles from "./styles";
import { Logo } from "../../assets/images";

const BigLoader = props => {
    const { classes } = props;

    return (
        <div className={classes.container}>
            <img src={Logo} alt="" className={classes.logo} />
            <LinearProgress color="primary"/>
        </div>
    );
};

export default withStyles(styles)(BigLoader);
