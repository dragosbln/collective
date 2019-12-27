import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/styles";
import styles from "./styles";
import CreateQuiz from "./createQuiz";
import { userActions, userSelectors, questionSelectors, questionActions } from "../../../../redux";

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            currentUser: userSelectors.getCurrentUser(state),
            teacherCategoriesList: questionSelectors.getTeacherCategoryList(state)
        }),
        dispatch => ({
            getCurrentUser() {
                dispatch(userActions.getCurrentUser());
            },
            getTeacherCategoryList() {
                dispatch(questionActions.getTeacherCategoryList());
            },
            addQuestion(payload, callback) {
                dispatch(questionActions.addQuestion(payload, callback));
            },
            updateQuestion(payload, id) {
                dispatch(questionActions.updateQuestion(payload, id));
            }
        })
    )
);

export default enhance(CreateQuiz);
