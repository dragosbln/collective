import React from 'react';
import {
    Container,
} from '@material-ui/core'
import Question from './question';
import Leaderboard from './leaderboard';

class Play extends React.Component {
    state = {
        selectedAnswer: null,
        answerSubmitted : false,
        showCorrectAnswer: false,
    }
    onPressAnswer = id => {
        this.setState(state => ({
            selectedAnswer: id === state.selectedAnswer ? 0 : id
        }));
    }

    handleSubmit = () => {
        const { submitAnswer } = this.props;
        const { selectedAnswer, answerSubmitted } = this.state;

        if (!!selectedAnswer && !answerSubmitted) {
            this.setState({
                answerSubmitted: true,
            }, () => submitAnswer(selectedAnswer));
        }
    }

    handleNewQuestion = () => {
        this.setState({
            answerSubmitted: false,
        });
    }

    handleChangeShowCorrectAnswer = (showCorrectAnswer) => {
        this.setState({
            showCorrectAnswer,
        });
    }

    render() {
        const { classes, isTeacher, currentQuestion, leaderboardPlayers, showLeaderboard } = this.props;
        const { selectedAnswer, showCorrectAnswer, answerSubmitted } = this.state;
        const timeInSeconds = currentQuestion.time/100;
        

        return (
            <Container className={classes.rootContainer}>
                {
                    showLeaderboard
                    ? <Leaderboard isTeacher={isTeacher} question={currentQuestion} leaderboardPlayers={leaderboardPlayers} />
                    : <Question
                        question={currentQuestion}
                        timeInSeconds={timeInSeconds}
                        selectedAnswer={selectedAnswer}
                        answerSubmitted={answerSubmitted}
                        onPressAnswer={this.onPressAnswer}
                        handleSubmit={this.handleSubmit}
                        handleNewQuestion={this.handleNewQuestion}
                        showCorrectAnswer={showCorrectAnswer}
                        handleChangeShowCorrectAnswer={this.handleChangeShowCorrectAnswer}
                    />
                }
            </Container>
        );
    }
}

export default Play;