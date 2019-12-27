import React from 'react';
import {
    Container,
    Typography,
} from '@material-ui/core';
import UserAvatar from '../../../components/userAvatar';
import Button from "../../../components/button";

class Waiting extends React.Component {
    componentDidUpdate() {
        const width = this.refs['container'].clientWidth;
        const height = this.refs['container'].clientHeight;

        this.props.players.forEach((user) => {
            let top = Math.random() * height - 120;
            let left = Math.random() * width - 120;
            if (top < 0) {
                top = 0;
            }
            if (left < 0) {
                left = 0;
            }
            this.refs[`avatarContainer-${user.id}`].style = `top: ${top}px; left:${left}px;`
        });
    }

    renderUser = user => {
        const { classes } = this.props;
        return (
            <div ref={`avatarContainer-${user.id}`} key={user.id} className={classes.avatarContainer}>
                <UserAvatar user={user} isVertical style={classes.textAvatar} />
            </div>
        );
    }

    render() {
        const { classes, players, isTeacher, startGame } = this.props;

        return (
            <Container maxWidth="xl" className={classes.containerWaiting}>
                <Typography
                    classes={{ root: classes.customText }}
                    align="center"
                    gutterBottom
                >
                    Waiting for players to join...
                </Typography>
                <div ref="container" className={classes.gridWaiting}>
                    {players.map(this.renderUser)}
                    <div className={classes.startContainer}>
                        {isTeacher &&
                            <Button style={classes.startGame} variant="contained" onClick={startGame}>
                                START GAME
                            </Button>
                        }
                    </div>
                </div>
            </Container>
        );
    }
}

export default Waiting;
