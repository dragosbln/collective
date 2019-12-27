import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    base: {
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    carouselContainer: {
        width: '75%',
        height: '540px'
    }
});

export default styles;