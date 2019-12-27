import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    base: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainContainer: {
        minHeight: '60%',
        marginTop: '5%',
        background: 'lightgrey',
    },
    list: {
        padding: 8,
        width: '47.5%',
        height: '65vh',
        overflowY: 'scroll'
    },
    questionContainer: {
        margin: '3px 6px'
    },
    step1Container: {
        padding: 20,
        borderRadius: 5
    },
    nextButton: {
        borderRadius: 5,
        marginTop: 20
    },
    addBtn: {
        borderRadius: 5,
        marginTop: 20,
    }
});

export default styles;