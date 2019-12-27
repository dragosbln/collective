import React, { Component } from 'react';
import { Card, Grid, CardHeader, Container } from '@material-ui/core';
import Carousel from '../../../../components/carousel';

class Active extends Component {

    componentDidMount(){
        this.props.getActiveQuizList();
    }

    render() {
        const { classes, isTeacher, joinGame, activeQuizList, buttonLoader } = this.props;
        
        return (
            <Grid container className={classes.base} spacing={3}>
                <Grid item className={classes.carouselContainer}>
                    <Carousel
                        isTeacher={isTeacher}
                        loading={buttonLoader}
                        quizzes={activeQuizList}
                        joinGame={joinGame}
                    />
                </Grid>
            </Grid>
        );
    }
}

export default Active;