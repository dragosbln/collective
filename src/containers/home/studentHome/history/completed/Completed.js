import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import {
    ExpandLess,
    ExpandMore,
} from '@material-ui/icons';
import {
    Collapse,
    Paper,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Container,
    Typography,
    Hidden,
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Fab
} from '@material-ui/core';
import { Logo, HistoryImage, MathImage, ScienceImage } from '../../../../../assets/images';

class Completed extends React.Component {
    state = {
        completedCard: {
            id: '1',
            title: 'Cool science quiz',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa ultricies mi quis hendrerit dolor magna eget est lorem',
            professor: 'Dan Mircea Suciu',
            class: 'VII B',
            duration: '30s',
            date: '22/11/2019',
            rank: '3'
        },

        questions: [
            { id: '1', content: 'Question 1', open: true },
            { id: '2', content: 'Question 2', open: true },
            { id: '3', content: 'Question 3', open: true },
            { id: '4', content: 'Question 4', open: true }

        ],

        answers: [
            { id: '1', contentanswer: "Answer A" },
            { id: '2', contentanswer: "Answer B" },
            { id: '3', contentanswer: "Answer C" },
            { id: '4', contentanswer: "Answer D" },
        ],

        peoples: [
            { id: '1', name: "Name1", points: "500" },
            { id: '2', name: "Name2", points: "500" },
            { id: '3', name: "Name3", points: "500" },
            { id: '4', name: "Name4", points: "500" },
            { id: '5', name: "Name5", points: "500" },
            { id: '6', name: "Name6", points: "500" },
            { id: '7', name: "Name7", points: "500" },
            { id: '8', name: "Name8", points: "500" },

        ],

        open: false

    }

    handleClick = () => {
        const updatedOpen = !this.state.open;
        this.setState({ open: updatedOpen });
    }

    render() {
        let questions = null;
        let answers = null;
        let peoples = null;

        answers = this.state.answers.map(answer => {
            return <Collapse in={this.state.open} timeout="auto" unmountOnExit key={answer.id}>
                <List component="div" disablePadding>
                    <ListItem divider={answer.id === '1'} selected={answer.id === '3'} button>
                        <ListItemText primary={answer.contentanswer} />
                    </ListItem>
                </List>
            </Collapse>
        })

        questions = this.state.questions.map((question) => {
            return <ListItem button onClick={this.handleClick} key={question.id}>
                <ListItemText primary={question.content} />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
                {answers}
            </ListItem>
        })

        peoples = this.state.peoples.map((people) => {
            return <ListItem key={people.id}>
                <ListItemIcon>
                    <InsertEmoticonIcon />
                </ListItemIcon>
                <ListItemText primary={people.name} />
            </ListItem>
        })

        const { classes } = this.props;
        return (
            <Paper className={classes.paperCompleted}>
                <Grid container spacing={3} className={classes.gridCompletedRoot} >
                    <Grid item xs>
                        <Typography variant="h3" className={classes.text}>
                            {this.state.completedCard.title}
                        </Typography>
                        <Typography variant="subtitle2" className={classes.text}>
                            {this.state.completedCard.description}
                        </Typography>
                        <Typography variant="h5" className={classes.text}>
                            {this.state.completedCard.date}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" className={classes.text}>
                            Professor: {this.state.completedCard.professor}
                        </Typography>
                        <Typography variant="h5" className={classes.text}>
                            Class: {this.state.completedCard.class}
                        </Typography>
                        <Typography variant="h5" className={classes.text}>
                            Time per question: {this.state.completedCard.duration}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h2" className={classes.text}>
                            Your rank: {this.state.completedCard.rank}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2} className={classes.gridCompletedRoot}>
                    <Grid item xs>
                        <Typography variant="h5" className={classes.text}>
                            Questions
                        </Typography>
                        <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
                            <List>
                                {questions}
                            </List>
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h5" className={classes.text}>
                            Leaderboard
                        </Typography>
                        <Paper style={{ maxHeight: 200, overflow: 'auto' }}>
                            <List>
                                {peoples}
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default Completed;
