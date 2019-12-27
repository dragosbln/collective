import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    avatart: {
        width: '80px',
        height: '80px'
    },
    userContainer: {
        alignContent: 'center'
    },
    containerWaiting: {
        paddingTop: '1%',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    customText: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontSize: 50,
    },
    textAvatar: {
        color: theme.palette.primary.main,
        textAlign: 'center',
        fontSize: 28,
        fontFamily: 'Lato',
        fontWeight: 'bold'
    },
    avatarContainer: {
        position:'absolute',
    },
    gridWaiting: {
        position: 'relative',
        width:'100%',
        height: '88%',
        paddingBottom: '200px'
    },
    startGame: {
        backgroundColor: theme.palette.right.main,
        width: '220px',
        height:'66px'
    },
    startContainer:{
        display: 'flex',
        position: 'absolute',
        justifyContent: 'center',
        bottom: 0,
        height: '200px',
        width: '100%'
    }

});

export default styles;