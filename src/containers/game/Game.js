import React from 'react';
import { Container } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { Logo, BiologyPattern, HistoryImage, MathImage, ScienceImage } from '../../assets/images';
import Waiting from './waiting';
import Play from './play';

class Home extends React.Component {
    componentDidMount() {
        // reconnecting on refresh
        if (+localStorage.getItem('currentGame') && this.props.allowReconnect) {
            console.log('RECONNECTING ON GAME MOUNT');
            if (this.props.currentUser.position === 'student') {
                this.props.joinGame(+localStorage.getItem('currentGame'));
            } else {
                // TODO: reconnect teacher logic
            }
        }
    }
    componentWillUnmount() {
        // disconnecting from the saga channel and the socket
        this.props.stopChannel();
    }

    render() {
        const { classes, isTeacher ,currentQuestion, waitingFlag, buttonLoader } = this.props;
        const currentGameId = +localStorage.getItem('currentGame');
        console.log(buttonLoader, waitingFlag, currentGameId);

        return (
            !buttonLoader && waitingFlag && !currentGameId
                ? <Redirect to="/home/active"/>
                : currentGameId
                    ? <div className={classes.gridRoot}>
                        { waitingFlag ? <Waiting isTeacher={isTeacher}/> : <Play isTeacher={isTeacher} key={currentQuestion.id}/> }
                    </div>
                    : <Redirect to="/home/active"/>
        );
    }
}


export default Home;



