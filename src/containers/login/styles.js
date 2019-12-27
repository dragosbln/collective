import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    container: {
        padding: theme.spacing(4, 6)
    },
    paper: {
        backgroundColor: theme.palette.common.darkPaper,
        padding: theme.spacing(2, 4),
        maxWidth: 320,
        borderRadius: theme.spacing(3),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    form: {
        margin: theme.spacing(2, 0)
    },
    image: {
        maxWidth: '80%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },
    white: {
        color: theme.palette.common.white
    },
    link: {
        display: 'flex',
        alignItems: 'center'
    },
    gridContainer: { },
    left: {
        paddingTop: theme.spacing(16)
    },
    right: {
        paddingTop: theme.spacing(10),
        display: 'flex',
        justifyContent: 'center',
    }
});

export default styles;