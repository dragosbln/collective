import { createStyles } from '@material-ui/core';
const styles = theme => createStyles ({
    base: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        border: 1,
        backgroundColor: theme.palette.common.darkPaper,  
    },
    cardMedia:{
        height: '60%'
    },
    timeTxt: {
        fontSize: 20,
        fontWeight: 'normal',
    },
    titleTxt: {
        position: 'absolute',
        top: '220px',
        fontWeight: 'bolder',
        fontSize: 32,
    },
    categoryTxt: {
        fontSize: 24,
        fontWeight: 'bold',
        position: 'absolute',
        top: '260px'
    },
    upComponents: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    descriptionContainer: {
        position:'relative',
        height: '360px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    formControl: {
        position: 'absolute',
        top: '300px',
    },
    select: {
        color: '#EEEEEE',
        width:'160px'

    },
    button: {
        width: '200px',
        height: '50px'
    }
});

export default styles;