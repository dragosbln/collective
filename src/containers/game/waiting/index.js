import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import Waiting from './Waiting';
import { gameSelectors, gameActions } from '../../../redux';

const enhance = compose(
    withRouter,
    withStyles(styles),
    connect(
        state => ({
            players: gameSelectors.getPlayersList(state)
        }),
        dispatch => ({
            channelOff() {
                dispatch(gameActions.channelOff());
            },
            startGame() {
                dispatch(gameActions.startGame());
            }
        })
    )
);


export default enhance(Waiting);