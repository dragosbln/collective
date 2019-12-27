import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import { withRouter } from 'react-router-dom';
import styles from './styles';
import Home from './StudentHome';

const enhance = compose(
    withRouter,
    withStyles(styles)
);

export default enhance(Home);