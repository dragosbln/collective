import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import Active from './Active';
import { push } from 'connected-react-router';
import { gameActions, quizSelectors, gameSelectors, quizActions } from '../../../../redux';

const enhance = compose(
    withRouter,
    withStyles(styles),
    connect(
        state => ({
            activeQuizList: quizSelectors.getActiveQuizList(state),
            buttonLoader: gameSelectors.getButtonLoader(state),
        }),
        dispatch => ({
            goTo(path) {
                dispatch(push(path));
            },
            joinGame(id) {
                dispatch(gameActions.joinGame(id));
            },
            getActiveQuizList(){
                dispatch(quizActions.getActiveQuizList());
            }
        })
    )
);

export default enhance(Active);