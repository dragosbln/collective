import React from "react";
import { Typography, Grid, TextField, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { withStyles, IconButton } from "@material-ui/core";
import { Edit, ArrowDropDown, Check } from "@material-ui/icons";
import cn from 'classnames';
import styles from "./styles";

const questionTile = props => {
    const {
        classes,
        showAnswers,
        answers,
        question,
        points,
        onChangePoints,
        seconds,
        onChangeSeconds,
        editingQuestion,
        onChangeQuestionText,
        onPressEditQuestion,
        onPressSaveQuestion,
        onPressEditAnswer,
        onEditAnswer,
        onPressSaveAnswer,
        hideButtons,
        isSelected
    } = props;

    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ArrowDropDown/>} classes={{content: classes.expnsionPanelContent}}>
            {
                !hideButtons &&
                <IconButton
                    className={classes.iconBtn}
                    onClick={
                        editingQuestion ? onPressSaveQuestion : onPressEditQuestion    
                    }
                >
                    { editingQuestion ? <Check /> : <Edit /> }
                </IconButton>
            }
            {
                editingQuestion
                ? <TextField
                        margin="none"
                        multiline
                        fullWidth
                        className={classes.questionTextField}
                        value={question}
                        onChange={onChangeQuestionText}
                        onClick={e => e.stopPropagation()}
                    />
                : <Typography
                    title={question}
                    className={cn({
                        [classes.questionText]: true,
                        [classes.showAllText]: !!showAnswers
                    })}
                    onClick={e => e.stopPropagation()}
                >
                    { question }
                </Typography>
            }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.panelDetails}>
                <Grid container className={classes.answerContainer} spacing={2}>
                    {
                        answers.map((answer, index) => (
                            <Grid
                                item
                                xs={6}
                                key={index}
                                className={cn({
                                    [classes.answerContainer]: true,
                                    [classes.correctAnswer]: !!answer.isCorrect
                                })}
                            >
                                {
                                    !hideButtons &&
                                    <IconButton
                                        className={classes.iconBtn}
                                        onClick={
                                            answer.editingAnswer
                                                ? () => onPressSaveAnswer(index)
                                                : () => onPressEditAnswer(index)
                                        }
                                    >
                                        { answer.editingAnswer ? <Check /> : <Edit /> }
                                    </IconButton>
                                }
                                {
                                    answer.editingAnswer
                                    ? <TextField
                                            margin="none"
                                            multiline
                                            fullWidth
                                            className={classes.answerTextField}
                                            value={answer.text}
                                            onChange={event => onEditAnswer(index, event)}
                                        />
                                    : <Typography
                                        className={cn({
                                            [classes.answerText]: true,
                                            [classes.showAllText]: !!showAnswers
                                        })}
                                    >
                                        { answer.text }
                                    </Typography>
                                }
                            </Grid>
                        ))
                    }
                </Grid>
                {
                    !!isSelected &&
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justify="space-around"
                        className={classes.extraInputsContainer}
                    >
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                value={points}
                                onChange={onChangePoints}
                                label="Points"
                                margin="none"
                                type="number"
                                inputProps={{ min: "0", max: "2000", step: "1" }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Time(s)"
                                value={seconds}
                                onChange={onChangeSeconds}
                                margin="none"
                                type="number"
                                inputProps={{ min: "0", max: "90", step: "1" }}
                            />
                        </Grid>
                    </Grid>
                }
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default withStyles(styles)(questionTile);
