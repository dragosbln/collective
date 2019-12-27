import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import MyQuizzes from './myQuizzes';
import { quizSelectors, quizActions, gameActions, groupActions, groupSelectors } from '../../../../redux';

const enhance = compose(
    withRouter,
    withStyles(styles),
    connect(
        state => ({
            teacherQuizList: quizSelectors.getTeacherQuizList(state),
            groupList: groupSelectors.getGroupList(state),
		}),
		dispatch => ({
			getInstitutionList(payload) {
				dispatch(quizActions.getTeacherQuizList(payload))
            },
            activateGame(quizId, groupName){
                dispatch(gameActions.activateGame(quizId, groupName));
            },
            getGroupList(){
                dispatch(groupActions.getGroupList());
            }
		}),
    )
);

export default enhance(MyQuizzes);