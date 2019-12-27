import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    gridColumn: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    gridColumnImage: {
        justifyContent: "center"
    },
    welcome: {
        paddingTop: '20vh',
        color: theme.palette.common.darkTitle,
    },
    text:{
        marginBottom: 40,
        color: theme.palette.common.darkTitle,
    },
    button: {
        background: theme.palette.primary.main,
        color: '#FFFFFF',
        borderRadius: 30,
        fontSize: 25,
        '&:hover': {
            background: theme.palette.common.darkTitle,
        },
    },
    image: {
        width: '80vh',
        maxWidth : '100%',      
    }

});

export default styles;