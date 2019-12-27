import React from 'react';
import {
    Grid,
    Avatar
} from '@material-ui/core';
import { withStyles } from '@material-ui/core';
import styles from './styles';
import Text from '../text';
import UserAvatar from '../userAvatar';
import { AvatarMan1 } from './../../assets/images/avatars';
import { TriangleUp, TriangleDown } from './../../assets/images';

const userTile = (props) => {
    const { classes, user, correctAnswer = true } = props;

    return (
        <Grid className={`${classes.userContainer} ${user.correctAnswer ? classes.userContainerTrue : classes.userContainerFalse}`}>
            <Grid className={classes.userRank}>
                <Text style={classes.rankText}>
                    {user.rank}
                </Text>
            </Grid>
            <Grid className={classes.userTile}>
                <Grid className={classes.userInfo}>
                    <Grid item key={user.id}>
                        <UserAvatar user={user} style={classes.avatarText} />
                    </Grid>
                </Grid>
                <Grid className={classes.rankingInfo}>
                    <div className={classes.avatarPoints} >
                        {user.rankDifference !== 0 &&
                            <img src={`${ user.rankDifference > 0 ? TriangleUp : TriangleDown}`} width='100%'/>
                        }
                    </div>
                    <Text style={classes.pointsText}>
                        {user.rankDifference}
                    </Text>
                    <Text style={classes.pointsText}>
                        {user.points}
                    </Text>
                </Grid>
            </Grid>
        </Grid>
    );
}


export default withStyles(styles)(userTile)