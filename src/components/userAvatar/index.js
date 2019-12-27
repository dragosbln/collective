import React from 'react';
import {
    Grid,
    Avatar,
    Typography
} from '@material-ui/core';
import Text from '../text';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import { AvatarMan1 } from '../../assets/images/avatars';

const userAvatar = (props) => {
    const { classes, user, isVertical = false, style} = props;

    return (
        <div className={`${classes.userContainer} ${ isVertical ?  classes.userContainerVertical : '' }`}>
            <Avatar className={classes.avatar} src={AvatarMan1}/>
            <Text style={classes.userName} style={style}>
                {user.firstName}
            </Text>
        </div>
    );
}

export default withStyles(styles)(userAvatar)