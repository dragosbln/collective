import React from "react";
import { ButtonBase, withStyles } from "@material-ui/core";
import styles from "./styles";
import Text from "../text";

const Button = props => {
    const { classes, style, onClick } = props;
    return (
        <ButtonBase
            onClick={onClick}
            color="primary"
            className={`${classes.base} ${style}`}
        >
            <Text style={`${classes.text}`} >{props.children}</Text>
        </ButtonBase>
    );
};

export default withStyles(styles)(Button);
