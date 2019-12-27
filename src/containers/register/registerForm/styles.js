import { createStyles } from '@material-ui/core';


const styles = theme => createStyles({
    paper: {
		backgroundColor: theme.palette.common.darkPaper,
		padding: '32px 16px',
		width: 360,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30,
	},
	fields:{
		width:'70%',
	},
	button:{
		background: theme.palette.primary.main,
		borderRadius: 30,
		fontWeight: 'bold',
		color: '#FFFFFF',
		width: 100,
	},
	title:{
		color:'white',
		fontWeight: '700',
		paddingBottom : 20,
	},
	container:{
		width:'80%',
		paddingTop : 30,
		display: 'flex',
		justifyContent: 'space-between',
	},
	link:{
		cursor: 'pointer',
		textDecoration: 'underline',
	},
	legend:{
		color:'#fff',
		fontWeight:'600',
	}
});

export default styles;