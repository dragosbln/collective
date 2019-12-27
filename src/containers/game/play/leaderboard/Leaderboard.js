import React from 'react';
import FlipMove from 'react-flip-move';
import Text from '../../../../components/text';
import { Grid, Avatar, Paper } from '@material-ui/core';
import { Crown } from '../../../../assets/images';
import  Button  from '../../../../components/button';
import UserTile from '../../../../components/userTile';
import ReactCountdownClock from "react-countdown-clock";


const Leaderboard = (props) => {
    const { classes, question, leaderboardPlayers, isTeacher, endGame } = props;

    const renderTile = (user, index) => {
        return (
            <Grid key={user.id} className={classes.UserTileContainer}>
                {
                    index === 0 &&
                    <div className={classes.avatar}>
                        <img src={Crown} width='100%' />
                    </div>
                }
                <UserTile user={user} />
            </Grid>
        );
    }

    return (
        <Grid container direction="column" justify="center">
            <Grid item >
                <Paper className={classes.mainContainer}>
                    {isTeacher &&
                        <Grid container className={classes.questionContainer}>
                            <Grid item xs={10}>
                                <Text style={classes.questionText}>{question.text}</Text>
                            </Grid>
                            <Grid item xs={2} className={classes.clockContainer}>
                                <ReactCountdownClock
                                    seconds={question.time}
                                    color="#A5D5D7"
                                    size={150}
                                    font="Lato"
                                    onComplete={() => {
                                    }}
                                />
                            </Grid>
                        </Grid>
                    }
                    <FlipMove className={classes.flipMove}>
                        {leaderboardPlayers.map(renderTile)}
                    </FlipMove>
                </Paper>
            </Grid>
            {isTeacher &&
                <div className={classes.buttonContainer}>
                    <Button style={classes.endGame} variant="contained" onClick={endGame}>
                        END QUIZ
                    </Button>
                </div>
            }
        </Grid>

    );
}

export default Leaderboard;