import { compose } from 'redux';
import { connect } from 'react-redux';
import {push} from 'connected-react-router'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Landing from './Landing';

const enhance = compose(
  withStyles(styles),
  connect(null,
  dispatch => ({
    goTo(path) {
      dispatch(push(path));
    }
  }))
);

export default enhance(Landing);