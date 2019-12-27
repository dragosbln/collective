import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    root:{
        background: '#fff',
    },
    imageContainer:{
        flex : '0 1'
    },
    tab:{
        color: theme.palette.common.anotherGray,
        fontWeight : '400',
        fontSize : 15,
    },
    tabContainer:{
        width:'100%',
    },
    tabMobile: {
        textAlign: 'center',
        width:'25vh',
        paddingTop: 30,
        boxShadow: '0 10px 20px rgba(0, 0, 0, .0), 0 6px 6px rgba(0, 0, 0, 0.1)',
    },
    quizTitleContainer: {
        flex: '1 1'
    },
    quizTitle: {
        flex: 1,
        fontFamily: 'Lato',
        fontWeight: 'bolder',
        fontSize: 36,
        color: theme.palette.primary.main,
        textAlign: 'center',
        justifyContent: 'center'
    }
});

export default styles;