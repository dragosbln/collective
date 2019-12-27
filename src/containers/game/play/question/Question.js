import React, { Fragment, Component } from "react";
import { Container, Grid, Button, Paper } from "@material-ui/core";
import Text from "../../../../components/text";
import ReactCountdownClock from "react-countdown-clock";
import CustomButton from "../../../../components/button";

class Question extends Component {
    render() {
        const {
            classes,
            onPressAnswer,
            selectedAnswer,
            answerSubmitted,
            question,
            timeInSeconds,
            handleSubmit,
            handleNewQuestion,
            showCorrectAnswer,
            handleChangeShowCorrectAnswer
        } = this.props;

        const renderAnswer = answer => (
            <Grid item xs={6} key={answer.id}>
                <Button
                    fullWidth
                    onClick={!answerSubmitted ? () => onPressAnswer(answer.id) : () => {}}
                    className={`${classes.answer} ${
                        selectedAnswer === answer.id ? classes.selected : ""
                    } ${
                        showCorrectAnswer && answer.isCorrect === true
                            ? classes.correctAnswer
                            : ""
                    }`}
                >
                    <Text>{ answer.text }</Text>
                </Button>
            </Grid>
        );

        return (
            <Fragment>
                <Paper className={classes.questionPaper}>
                    <Grid container className={classes.questionContainer}>
                        <Grid item xs={10}>
                            <Text style={classes.questionText}>{question.text}</Text>
                        </Grid>
                        <Grid item xs={2}>
                            <ReactCountdownClock
                                seconds={timeInSeconds}
                                color="#A5D5D7"
                                size={150}
                                font="Lato"
                                onComplete={() => {
                                    if (selectedAnswer && !answerSubmitted) {
                                        handleSubmit();
                                    }
                                    handleChangeShowCorrectAnswer(true);
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justify="center"
                        spacing={2}
                    >
                        { question.answers.map(renderAnswer) }
                    </Grid>
                    <div className={classes.submitContainer}>
                        <Button
                            fullWidth
                            classes={{ root: classes.submitButton }}
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Submit
                        </Button>
                    </div>
                </Paper>
            </Fragment>
        );
    }
};

export default Question;
