import { compose } from 'redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import Completed from './Completed';

const enhance = compose(
    withStyles(styles)
);

export default enhance(Completed);