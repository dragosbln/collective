import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    answerTextField:{
        marginTop: '-5px'
    },
    questionText: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        cursor: 'initial',
        flex: 1
    },
    showAllText:{
        whiteSpace: 'inherit'
    },
    iconBtn: {
        padding: '0 5px',
        width: 30,
        height: 30
    },
    expnsionPanelContent: {
        width: 'calc(100% - 48px)' // take the padding into account
    },
    answerText: {
        flex: 1,
        height: '100%'
    },
    answerContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 3px',
        borderRadius: '5px'
    },
    correctAnswer: {
        backgroundColor: '#0CCC5F'
    },
    extraInputsContainer: {
        marginTop: '10px'
    },
    panelDetails: {
        flexWrap: 'wrap'
    },
});

export default styles;