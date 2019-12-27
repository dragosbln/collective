import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Play from './Play';
import { gameSelectors, gameActions } from '../../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        state => ({
            currentQuestion: gameSelectors.getCurrentQuestion(state),
            leaderboardPlayers: gameSelectors.getLeaderboardPlayersList(state),
            showLeaderboard: gameSelectors.getLeaderboardFlag(state)
        }),
        dispatch => ({
            submitAnswer(answerId) {
                dispatch(gameActions.submitAnswer(answerId));
            },
        }),
    )
);

export default enhance(Play);