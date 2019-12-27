import { createStyles } from '@material-ui/core';

const styles = theme => createStyles({
    userContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: '#EF4E63',
        borderRadius: 15,
        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)'

    },
    avatarPoints: {
        width: '30px',
        height: '30px',
        alignSelf: 'center'
    },
    userContainerTrue:{
        backgroundColor: theme.palette.right.main,
    },
    userContainerFalse:{
        backgroundColor: theme.palette.wrong.main,
    },
    userInfo: {
        display: 'flex',
        padding: '0.5%'
    },
    userTile: {
        display: 'flex',
        width: '90%',
        justifyContent: 'space-between'
        
    },
    rankingInfo: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0.5%'
    },
    pointsText: {
        height: '100%',
        fontFamily: 'Lato',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        marginRight: '20px',
        marginLeft: '20px'
    },
    avatarText: {
        height: '100%',
        fontFamily: 'Lato',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)',
        marginRight: '20px',
    },
    rankText: {
        height: '100%',
        fontFamily: 'Lato',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    userRank: {
        width:'10%',
        textAlign: 'center',
        padding: '0.5%'
    }

});

export default styles;