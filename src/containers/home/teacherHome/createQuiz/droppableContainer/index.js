import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Droppable, Draggable } from "react-beautiful-dnd";
import QuestionTile from "../../../../../components/questionTile";
import styles from "./styles";

const droppableList = props => {
    const {
        items,
        updateItemValue,
        saveEditQuestion,
        updateAnswerItem,
        saveEditAnswer,
        droppableId,
        showAddButton,
        onPressAddQuestion,
        createQuestion,
        updateCreateQuestionAnswer,
        updateCreateQuestionField,
        onPressSaveNewQuestion,
        classes,
        isSelected
    } = props;

    return (
        <Droppable droppableId={droppableId}>
            {(provided, snapshot) => (
                <Grid item xs={6} className={classes.list} ref={provided.innerRef}>
                    {items.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => (
                                <div
                                    className={classes.questionContainer}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    <QuestionTile
                                        isSelected={isSelected}
                                        editingQuestion={item.editingQuestion}
                                        onPressEditQuestion={e => {
                                            e.stopPropagation();
                                            updateItemValue(
                                                item.id,
                                                "editingQuestion",
                                                true,
                                                isSelected
                                            )
                                        }}
                                        onPressSaveQuestion={e => {
                                            e.stopPropagation();
                                            saveEditQuestion(item.id, isSelected)
                                        }}
                                        onChangeQuestionText={event =>
                                            updateItemValue(
                                                item.id,
                                                "text",
                                                event.target.value,
                                                isSelected
                                            )
                                        }
                                        onPressEditAnswer={answerIndex =>
                                            updateAnswerItem(
                                                item.id,
                                                answerIndex,
                                                "editingAnswer",
                                                true,
                                                isSelected
                                            )
                                        }
                                        onPressSaveAnswer={(answerIndex) => saveEditAnswer(item.id, answerIndex, isSelected)}
                                        onEditAnswer={(answerIndex, event) =>
                                            updateAnswerItem(
                                                item.id,
                                                answerIndex,
                                                "text",
                                                event.target.value,
                                                isSelected
                                            )
                                        }
                                        showAnswers={item.showAnswers}
                                        question={item.text}
                                        answers={item.answers}
                                        points={item.points}
                                        seconds={item.seconds}
                                        onChangePoints={event =>
                                            updateItemValue(
                                                item.id,
                                                "points",
                                                event.target.value,
                                                true,
                                                isSelected
                                            )
                                        }
                                        onChangeSeconds={event =>
                                            updateItemValue(
                                                item.id,
                                                "seconds",
                                                event.target.value,
                                                true,
                                                isSelected
                                            )
                                        }
                                    />
                                </div>
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                    <Grid
                        item
                        className={classes.createQuestionContainer}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {
                            createQuestion &&
                            <QuestionTile
                                editingQuestion={true}
                                onChangeQuestionText={event =>
                                    updateCreateQuestionField("text", event.target.value)
                                }
                                onEditAnswer={(answerIndex, event) =>
                                    updateCreateQuestionAnswer(answerIndex, event.target.value)
                                }
                                hideButtons
                                isSelected={true}
                                showAnswers={createQuestion ? true : false}
                                question={createQuestion.question}
                                answers={createQuestion.answers}
                                points={createQuestion.points}
                                seconds={createQuestion.seconds}
                                onChangePoints={event =>
                                    updateCreateQuestionField("points", event.target.value)
                                }
                                onChangeSeconds={event =>
                                    updateCreateQuestionField("seconds", event.target.value)
                                }
                            />
                        }
                    </Grid>
                    {
                        showAddButton &&
                        <Button
                            onClick={
                                createQuestion ? onPressSaveNewQuestion : onPressAddQuestion
                            }
                            color="secondary"
                            variant="contained"
                            className={classes.addBtn}
                        >
                            <Typography>
                                {createQuestion ? "Save new question" : "Add new question..."}
                            </Typography>
                        </Button>
                    }
                </Grid>
            )}
        </Droppable>
    );
};

export default withStyles(styles)(droppableList);
