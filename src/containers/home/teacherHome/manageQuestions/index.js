import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import ManageQuestions from './manageQuestions';

const enhance = compose(
    withStyles(styles),
    connect(null, null) // remove if this component doesn't need to be connected to redux
);

export default enhance(ManageQuestions);