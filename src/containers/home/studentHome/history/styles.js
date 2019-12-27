import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    gridRoot: {
    flexGrow: 1,
    alignItems: "center",
    alignContent: "center",
    },
    historyCard: {
    maxWidth: 320,
    maxHeight: 540,
    alignSelf: "center"
    }
    
});

export default styles;