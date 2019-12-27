import React from 'react';
import { 
    Container, 
    Typography,
    Hidden,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Fab,
    Dialog
} from '@material-ui/core';
import {Logo, HistoryImage, MathImage, ScienceImage } from '../../../../assets/images';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Completed from './completed';
import Carousel from '../../../../components/carousel';
import { quizzes } from '../../../../utils/mockData';



class History extends React.Component {
    state = {
        historyCards: [
            {id:'1',title:'Quiz 1', professor:'professor1', date:'date1', score:'score', ranking:'ranking',img: HistoryImage},
            {id:'2',title:'Quiz 2', professor:'professor2', date:'date2', score:'score', ranking:'ranking',img: MathImage},
            {id:'3',title:'Quiz 3', professor:'professor3', date:'date3', score:'score', ranking:'ranking',img: ScienceImage},
            {id:'4',title:'Quiz 4', professor:'professor2', date:'date4', score:'score', ranking:'ranking',img: MathImage},
            {id:'5',title:'Quiz 5', professor:'professor1', date:'date5', score:'score', ranking:'ranking',img: ScienceImage},
            {id:'6',title:'Quiz 6', professor:'professor4', date:'date6', score:'score', ranking:'ranking',img: HistoryImage},
        ],
        showHistoryCards: true,
        lessThanFour: false,
        begin: 0,
        end: 3,
        activeQuizz: 0
    }

    handleClickRight = () => {
        if(this.state.end < this.state.historyCards.length){
            this.setState({begin: this.state.begin+1});
            this.setState({end: this.state.end+1});
        }
    }
    
    handleClickLeft = () => {
        if(this.state.begin > 0){
            this.setState({begin: this.state.begin-1});
            this.setState({end: this.state.end-1});
        }
    }
    openQuizz = id => () => {
        this.setState({
            activeQuizz: id
        });
    }
    render() {
        const { classes } = this.props;
        const { activeQuizz } = this.state;

        return (
            <Grid container className={classes.base} spacing={3}>
                <Grid item className={classes.carouselContainer}>
                    <Carousel quizzes={quizzes} onOpenItem={this.openQuizz}/>
                </Grid>
                <Dialog
                    open={!!activeQuizz}
                    maxWidth="lg"
                    onClose={() => this.setState({activeQuizz: 0})}
                >
                    <Completed/>
                </Dialog>
            </Grid>
        );
    }
}


export default History;