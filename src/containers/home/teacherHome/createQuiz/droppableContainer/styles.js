import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    list: {
        padding: '8px',
        height: '65vh',
        overflowY: 'scroll',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    questionContainer: {
        width: '100%',
        margin: '3px 6px'
    },
    addBtn: {
        width:'98%',
        borderRadius: '5px',
        padding: 0,
        margin: '3px 6px'
    },
    createQuestionContainer: {
        margin: '3px 6px',
    },
});

export default styles;