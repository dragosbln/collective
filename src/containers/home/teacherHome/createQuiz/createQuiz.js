import React from "react";
import { Grid, TextField, Select, MenuItem, Button, Paper, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, IconButton } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import * as icons from 'mdi-material-ui';
import DroppableContainer from "./droppableContainer";
import { getItems, reorder, move } from "../../../../utils/dnd";
import { categories, question } from "../../../../utils/mockData";

class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            categoryId: '',
            quizTitle: '',
            items: [],
            selected: [],
            createQuestion: null,
            editMode: false,
            question: {
                text: 'question text?',
                answers: [
                    {
                        text: 'answer 1',
                        editing: false,
                    }, {
                        text: 'answer 2',
                        editing: false,
                    }, {
                        text: 'answer 3',
                        editing: false,
                    }, {
                        text: 'answer 4',
                        editing: false,
                    }
                ]
            }
        };
    }

    /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
    id2List = {
        droppable: "items",
        droppable2: "selected"
    };

    componentDidMount() {
        this.props.getTeacherCategoryList();
    }

    mapQuestionsToState = () => {
        const items = this.props.teacherCategoriesList
                .find(cat => +cat.id === this.state.categoryId)
                .Questions.map(question => ({
                    ...question,
                    id: `item-${question.id}`,
                    // editingQuestion: false,
                    points: 500,
                    seconds: 30,
                    answers: question.Answers.map(answer => ({
                        ...answer,
                        // editingAnswer: false
                    }))
                }));
            this.setState(state => ({
                ...state,
                items
            }));
    }

    setEditMode = e => {
        e.stopPropagation();
        this.setState(state => ({
            editMode: !state.editMode
        }));
    }

    setEditAnswer = index => () => {
        this.setState(state => ({
            question: {
                ...state.question,
                answers: state.question.answers.map((a, i) => ({
                    ...a,
                    editing: a.editing ? false : i === index
                }))
            }
        }));
    }

    handleChangeQuestion = e => {
        const { value } = e.target;

        this.setState(state => ({
            question: {
                ...state.question,
                text: value
            }
        }));
    }

    handleChangeAnswer = index => e => {
        const { value } = e.target;

        this.setState(state => ({
            question: {
                ...state.question,
                answers: state.question.answers.map((a, i) => ({
                    ...a,
                    text: i === index ? value : a.text
                }))
            }
        }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.teacherCategoriesList && this.props.teacherCategoriesList) {
            //the categories list has just arrived, init categoryId
            this.setState(state => ({
                ...state,
                categoryId: this.props.teacherCategoriesList[0].id
            }))
        }
        if (prevState.step !== this.state.step) {
            //moved to step 2, initializing containers
            this.mapQuestionsToState();
        }
        if (
            prevProps.teacherCategoriesList[this.state.categoryId] &&
                prevProps.teacherCategoriesList[this.state.categoryId].Questions.length !==
                this.props.teacherCategoriesList[this.state.categoryId].Questions.length
        ) {
            //a new question was created. it will arrive in the last position of the redux list, because of database id increment
            const lastIndex = this.props.teacherCategoriesList[this.state.categoryId].Questions.length - 1;
            const newQuestion = this.props.teacherCategoriesList[this.state.categoryId].Questions[lastIndex];
            this.setState(state => ({
                ...state,
                selected: [
                    ...state.selected,
                    newQuestion
                ]
            }));
        }
    }

    getList = id => this.state[this.id2List[id]];

    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.getList(source.droppableId),
                source.index,
                destination.index
            );

            let state = { items };

            if (source.droppableId === "droppable2") {
                state = { selected: items };
            }

            this.setState(state);
        } else {
            const result = move(
                this.getList(source.droppableId),
                this.getList(destination.droppableId),
                source,
                destination
            );

            this.setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    updateItemValue = (
        itemId = null,
        key = "",
        newVal = null,
        fromSelectedList = false,
        flipBoolean = false
    ) => {
        const newtItems = fromSelectedList
            ? [...this.state.selected]
            : [...this.state.items];
        const itemIndex = newtItems.findIndex(it => it.id === itemId);
        if (itemIndex === -1) {
            return;
        }
        newtItems[itemIndex] = {
            ...newtItems[itemIndex],
            [key]: flipBoolean ? !newtItems[itemIndex][key] : newVal
        };

        this.setState(state => ({
            ...state,
            [fromSelectedList ? "selected" : "items"]: newtItems
        }));
    };

    flipBoolean = (id = null, key = "", fromSelectedList = false) => {
        this.updateItemValue(id, key, null, fromSelectedList, true);
    };

    saveEditQuestion = (questionId = null, fromSelectedList = false) => {
        this.updateItemValue(
            questionId,
            "editingQuestion",
            false,
            fromSelectedList
        );
        const items = fromSelectedList ? this.state.selected : this.state.items;
        const question = items.find(el => el.id === questionId);
        const realQuestionId = +question.id.split("-")[1];
        this.props.updateQuestion(question, realQuestionId);
    };

    updateCreateQuestionAnswer = (answerIndex, value) => {
        const newAnswers = [...this.state.createQuestion.answers];

        newAnswers[answerIndex] = {
            ...newAnswers[answerIndex],
            text: value
        };
        this.setState(state => ({
            ...state,
            createQuestion: {
                ...state.createQuestion,
                answers: newAnswers
            }
        }));
    };

    updateCreateQuestionField = (key, value) => {
        this.setState(state => ({
            ...state,
            createQuestion: {
                ...state.createQuestion,
                [key]: value
            }
        }));
    };

    updateAnswerItem = (
        questionId = "",
        answerIndex = 0,
        key = "",
        newValue = null,
        fromSelectedList = false
    ) => {
        const newtItems = fromSelectedList
            ? [...this.state.selected]
            : [...this.state.items];
        const itemIndex = newtItems.findIndex(it => it.id === questionId);
        const newAnswers = [...newtItems[itemIndex].answers];
        newAnswers[answerIndex] = {
            ...newAnswers[answerIndex],
            [key]: newValue
        };
        newtItems[itemIndex] = {
            ...newtItems[itemIndex],
            answers: newAnswers
        };
        this.setState(state => ({
            ...state,
            [fromSelectedList ? "selected" : "items"]: newtItems
        }));
    };

    saveEditAnswer = (
        questionId = "",
        answerIndex = 0,
        fromSelectedList = false
    ) => {
        this.updateAnswerItem(
            questionId,
            answerIndex,
            "editingAnswer",
            false,
            fromSelectedList
        );
        const items = fromSelectedList ? this.state.selected : this.state.items;
        const answer = items.find(el => el.id === questionId).Answers[answerIndex];
        const realAnswerId = +answer.id.split("-")[1];
        //REDUX PUT {answer} at /answer/{realAnswerId}
    };

    onPressAddQuestion = () => {
        const newQuestion = {
            showAnswers: true,
            text: "",
            categoryId: this.state.categoryId,
            type: 'multiple-choice',
            points: 500,
            seconds: 30,
            answers: [
                {
                    text: "",
                    editingAnswer: true,
                    isCorrect: true
                },
                {
                    text: "",
                    editingAnswer: true,
                    isCorrect: false
                },
                {
                    text: "",
                    editingAnswer: true,
                    isCorrect: false
                },
                {
                    text: "",
                    editingAnswer: true,
                    isCorrect: false
                }
            ],
            editingQuestion: true
        };
        this.setState(state => ({
            ...state,
            createQuestion: newQuestion
        }));
    };

    onPressSaveNewQuestion = () => {
        this.props.addQuestion(this.state.createQuestion, () => {
            // a callback to reset the local state
            this.setState(state => ({
                ...state,
                createQuestion: null
            }));
        });
    };

    onChangeCategory = categoryId => {
        this.setState(state => ({
            ...state,
            categoryId
        }));
    };

    onPressNext = () => {
        this.setState(state => ({
            ...state,
            step: 2
        }));
    };

    onChangeQuizTitle = quizTitle => {
        this.setState(state => ({
            ...state,
            quizTitle
        }));
    };

    saveQuiz = () => {
        const quizToSave = {
            name: this.state.quizTitle,
            questions: this.state.selected.map(el => ({
                id: el.id,
                points: el.points,
                time: el.seconds
            }))
        };
        //REDUX: POST quizToSave to the route /quizzes
    };

    render() {
        const { classes, teacherCategoriesList } = this.props;
        const { quizTitle, categoryId, items, createQuestion, selected, step, question, editMode } = this.state;

        return (
            <div className={classes.base}>
                <Grid
                    container
                    justify={step === 1 ? 'center' : 'space-between'}
                    alignItems="center"
                    className={classes.mainContainer}
                    spacing={0}
                >
                    {
                        step === 1 ?
                        <Grid item>
                            <Paper classes={{ root: classes.step1Container}}>
                                <TextField
                                    label="Quiz Title"
                                    value={quizTitle}
                                    fullWidth
                                    onChange={event => this.onChangeQuizTitle(event.target.value)}
                                />
                                <Select
                                    fullWidth
                                    value={categoryId}
                                    onChange={event => this.onChangeCategory(event.target.value)}
                                >
                                    {
                                        teacherCategoriesList.map(category => (
                                            <MenuItem key={category.id} value={category.id}>
                                                { category.name }
                                            </MenuItem>
                                        ))
                                    }
                                </Select>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    disabled={!categoryId || !quizTitle}
                                    onClick={this.onPressNext}
                                    className={classes.nextButton}
                                >
                                    Next
                                </Button>
                            </Paper>
                        </Grid>
                    : <DragDropContext onDragEnd={this.onDragEnd}>
                        <DroppableContainer
                            droppableId="droppable"
                            items={items}
                            flipBoolean={this.flipBoolean}
                            updateItemValue={this.updateItemValue}
                            saveEditQuestion={this.saveEditQuestion}
                            updateAnswerItem={this.updateAnswerItem}
                            saveEditAnswer={this.saveEditAnswer}
                        />
                        <DroppableContainer
                            droppableId="droppable2"
                            isSelected
                            showAddButton
                            createQuestion={createQuestion}
                            updateCreateQuestionAnswer={this.updateCreateQuestionAnswer}
                            updateCreateQuestionField={this.updateCreateQuestionField}
                            onPressAddQuestion={this.onPressAddQuestion}
                            onPressSaveNewQuestion={this.onPressSaveNewQuestion}
                            items={selected}
                            flipBoolean={this.flipBoolean}
                            updateItemValue={this.updateItemValue}
                            saveEditQuestion={this.saveEditQuestion}
                            updateAnswerItem={this.updateAnswerItem}
                            saveEditAnswer={this.saveEditAnswer}
                        />
                    </DragDropContext>
                    }
                </Grid>
                <Button
                    color="primary"
                    variant="contained"
                    className={classes.addBtn}
                    onClick={this.saveQuiz}
                >Save quiz</Button>
            </div>
        );
    }
}

export default CreateQuiz;
