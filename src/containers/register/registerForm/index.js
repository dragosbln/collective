import { compose } from 'redux';
import { connect } from 'react-redux';
import {push} from 'connected-react-router'
import { withStyles } from '@material-ui/styles';
import styles from './styles';
import RegisterForm from './RegisterForm'
import { 
	userSelectors,
	institutionActions, 
	institutionSelectors, 
	groupActions, 
	groupSelectors,
	userActions, 
} from '../../../redux';

const enhance = compose(
	withStyles(styles),
	connect(
		state => ({
			institutionList: institutionSelectors.getInstitutionList(state),
			groupList: groupSelectors.getGroupList(state),
			buttonLoader: userSelectors.getButtonLoader(state),
		}),
		dispatch => ({
			getInstitutionList(payload) {
				dispatch(institutionActions.getInstitutionList(payload))
			},
			getGroupList(payload) {
				dispatch(groupActions.getGroupList(payload))
			},
			goTo(path) {
				dispatch(push(path));
			},
			addUser(payload){
				dispatch(userActions.addUser(payload));
			},
		}),
	)
);

export default enhance(RegisterForm);