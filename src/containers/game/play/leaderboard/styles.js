import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    mainContainer: {
        background: theme.palette.common.darkPaper,
        borderRadius: 30,
        padding: 20,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        height: '70vh'
    },
    UserTileContainer: {
        width: '100%',
        height:'50px',
        margin: '15px',
        position: 'relative'
    },
    flipMove: {
        height:'100%',
        width:'100%',
        padding: '40px',
        overflow: 'auto',
        minHeight: '20vh',
        maxHeight: '40vh',
    },
    avatar: {
        position: 'absolute',
        width: '80px',
        height: '80px',
        top: '-56px',
        left: '-40px'
        
    },
    buttonContainer: {
        marginTop: theme.spacing(4),
        display: 'flex',
        justifyContent: 'center'
    },
    questionContainer: {
        paddingLeft: '50px',
        textAlign: 'left',
        marginBottom: theme.spacing(2)
    },
    clockContainer: {
        paddingTop: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 48,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        color: '#EEEEEE',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    endGame: {
        backgroundColor: theme.palette.wrong.main,
        width: '220px',
        height:'66px'
    }
});

export default styles;