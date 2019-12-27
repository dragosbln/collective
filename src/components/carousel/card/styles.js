import { createStyles } from '@material-ui/core';
import {TestBg} from '../../../assets/images';
import {BiologyPattern} from '../../../assets/images'

const styles = theme => createStyles({
    base: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        border: 1,
        backgroundColor: theme.palette.common.darkPaper
    },
    professorTxt: {
        position:'absolute',
        top:'280px',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Lato',
        color: '#EEEEEE',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    timeTxt: {
        position: 'absolute',
        top:'320px',
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Lato',
        color: '#EEEEEE',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    baseTxt: {
        fontWeight: 'bold',
        fontSize: 24,
        fontFamily: 'Lato',
        color: '#EEEEEE',
        textShadow: '0px 3px 6px rgba(0,0,0,0.16)'
    },
    titleTxt: {
        position:'absolute',
        top: '240px',
        fontWeight: 'bolder',
        fontSize: 32,
    },
    descriptionTxt:{
        position:'absolute',
        top:'360px',
        fontSize: 18,
        fontFamily: 'Lato',
        fontWeight: 'bold',
        color: '#EEEEEE',
        textAlign: 'center'
    },
    cardContent: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative'
    },
    imageBg:{
        width: '100%',
        height: '60%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    white: {
        color: theme.palette.common.white
    },
    buttonContainer: {
        width: '60%',
        height: 40,
        zIndex: 100
    },
    descriptionContainer:{
        position:'relative',
        width:'100%',
        maxHeight: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 100
    },
    cardMedia:{
        height: '60%'
    },
});

export default styles;