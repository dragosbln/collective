import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles'

const Text = (props) => {
    const { classes, style } = props;

    return (
        <Typography className={`${classes.text} ${style}`} component="span">
            {props.children}
        </Typography>
    );
}

export default withStyles(styles)(Text);
