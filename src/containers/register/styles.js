import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    gridColumn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center"
    },
    image: {
        width: '80vh',
        maxWidth: '100%',
        filter: 'blur(4px)',
    },
});

export default styles;