import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    gridCompletedRoot: {
        flexGrow: 1,
        alignItems: "center",
        alignContent: "center",
        color: theme.palette.common.anotherGray
    },
    paperCompleted: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.common.anotherGray
    }
    
});

export default styles;