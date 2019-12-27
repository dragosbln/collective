import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Leaderboard from './Leaderboard';
import { gameActions } from '../../../../redux';

const enhance = compose(
    withStyles(styles),
    connect(
        null,
        dispatch => ({
            endGame() {
                dispatch(gameActions.endGameTeacher());
            },
        }),
    )
);

export default enhance(Leaderboard);