import { createStyles } from '@material-ui/core';
import { BiologyPattern } from '../../../../assets/images';

const styles = theme => createStyles({
    questionPaper: {
        minHeight: '50vh',
        width: '60vw',
        background: theme.palette.common.darkPaper,
        alignContent: 'center',
        justifyContent: 'center',
        padding: '50px',
        borderRadius: 30,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
    },
    countdownClock: {
        position:'absolute',
        top: '10%',
        right: '10%'
    },
    questionContainer: {
        textAlign: 'left',
        marginBottom: theme.spacing(2)
    },
    questionText: {
        fontSize: 48,
        fontWeight: 'bold',
        fontFamily: 'Lato',
        color: '#EEEEEE',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
    },
    answer: {
        margin: '0px 0.5%',
        height: '100%',
        minHeight: 80,
        background: theme.palette.common.anotherGray,
        borderRadius: 15,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    selected: {
        boxShadow: '0px 3px 40px #00ADB5'
    },
    correctAnswer: {
        background: theme.palette.right.main,
    },
    customText: {
        width:'90%',
        color: '#FFFFFF',
        fontSize: 24,
        fontFamily: 'Lato',
        textAlign: 'left',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    answersRow: {
        margin: '0.5% 0',
        height: '48%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    submitContainer: {
        marginTop: '25px',
    },
    submitButton: {
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        fontSize: 24,
        padding: '5px 9px'
    },
    countdownContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        fontFamily: 'Lato',
        margin: '0',
    }
});

export default styles;