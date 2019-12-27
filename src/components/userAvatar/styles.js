import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    textWaiting: {
        color: theme.palette.primary.main
    },
    avatar: {
        width: '40px',
        height: '40px',
        marginRight: '20px',
        marginLeft: '20px',
    },
    userContainer: {
        height: '100%',
        alignContent: 'center',
        display:'flex'
    },
    userContainerVertical: {
        flexDirection: 'column'
    },
    userName: {
        height: '100%',
        fontFamily: 'Lato',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    }
});

export default styles;