import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import Game from './Game';
import { gameActions, gameSelectors, userSelectors } from '../../redux';

const enhance = compose(
    withRouter,
    withStyles(styles),
    connect(
        state => ({
            allowReconnect: gameSelectors.getReconnectFlag(state),
            currentQuestion: gameSelectors.getCurrentQuestion(state),
            waitingFlag: gameSelectors.getWaitingFlag(state),
            currentUser: userSelectors.getCurrentUser(state),
            buttonLoader: gameSelectors.getButtonLoader(state)
        }),
        dispatch => ({
            stopChannel() {
                dispatch(gameActions.stopChannel());
            },
            joinGame(gameId) {
                dispatch(gameActions.joinGame(gameId));
            }
        })
    )
);

export default enhance(Game);