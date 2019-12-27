import { all, call, put, take, takeLatest, race, fork, cancelled, delay, cancel } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { eventChannel } from 'redux-saga';
import io from 'socket.io-client';
import { apiConfig } from '../config'

import { gameActions, gameTypes } from '../redux';
import { socketActions } from '../utils/socketActions';


const socketServerURL = apiConfig.URL_MAIN;

// we need the socket instance throughtout this file
let socket;

// wrapping function for socket connect
const connect = quizId => {
    console.log("connect: ", quizId);
    socket = io(socketServerURL);
    return new Promise((resolve) => {
        socket.on('connect', () => {
            const token = localStorage.getItem('access_token');
            console.log("INIT");
            socket.emit('INIT_TEACHER', { quizId, token });
            resolve(socket);
        });
    });
};

const createConnectionsChannel = socket => eventChannel(emit => {
    
    const handleNewPlayer = (data) => {
        emit(gameActions.newPlayer(data));
    };
    const handleGetGameId = (data) => {
        localStorage.setItem('currentGame', data);
        emit(push('/game'));
    }
    const getQuestion = data => {
        emit(gameActions.receiveGetCurrentQuestionTeacher(data));

    };
    const getLeaderboard = data => {
        emit(gameActions.receiveGetLeaderboardPlayersListTeacher(data));
    };


    socket.on(socketActions.NEW_PLAYER_CONNECTED, handleNewPlayer);
    socket.on(socketActions.GET_GAME_ID, handleGetGameId);
    socket.on(socketActions.GET_QUESTION, getQuestion);
    socket.on(socketActions.GET_LEADERBOARD, getLeaderboard);
    socket.on(socketActions.GET_LEADERBOARD_TEACHER, getLeaderboard);

    return () => {
        socket.off(socketActions.NEW_PLAYER_CONNECTED, handleNewPlayer);
        socket.off(socketActions.GET_GAME_ID, handleGetGameId);
        socket.off(socketActions.GET_QUESTION, getQuestion);
        socket.off(socketActions.GET_LEADERBOARD, getLeaderboard);
        socket.off(socketActions.GET_LEADERBOARD_TEACHER, getLeaderboard);
        socket.disconnect(true);
    };
});

const socketHandler = function* (channel) {
    yield put(gameActions.receiveActivateGame());
    yield put(gameActions.setWaitingFlag(true));
    //yield put(gameActions.cancelReconnectFlag());

    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
};

const activateGame = function* (action) {
    try {
        yield put(gameActions.requestActivateGame());

        // TODO: add group ID
        const { timeout } = yield race({
            connected: call(connect, action.id),
            timeout: delay(2000),
        });
        if (timeout) {
            // this will cancell the saga and disconnect the socket if the delay effect wins the race
            throw new Error('TIMEOUT WHEN CONNECTING TO SOCKET');
        }
        const socketChannel = yield call(createConnectionsChannel, socket);
        yield put(gameActions.startChannel());
        const mainThread = yield fork(socketHandler, socketChannel);

        // blocking action for closing the channel and the socket
        yield take(gameTypes.STOP_CHANNEL);
        socketChannel.close();
        yield cancel(mainThread);
    } catch (error) { 
        yield put(gameActions.receiveActivateGameFail());
        socket.disconnect(true);
        // TODO: show some kind of message in the UI
        yield put(push('/home/my-quizzes'));
    } finally {
        if (yield cancelled()) {
            console.warn('SOCKET DISCONNECTED: Saga cancelled');
            socket.disconnect(true);
            yield put(gameActions.stopChannel());
        }
    }
};

const startGame = function* (action) {
    const gameId = localStorage.getItem('currentGame');
    socket.emit(socketActions.START_GAME, {gameId});
};

const endGame = function* () {
    const gameId = localStorage.getItem('currentGame');
    socket.emit(socketActions.END_GAME_TEACHER, {gameId});

    localStorage.removeItem('currentGame');
    yield put(gameActions.stopChannel());
    yield put(push('/home/my-quizzes'));
};

export default function* () {
    yield all([
        takeLatest(gameTypes.ACTIVATE_GAME, activateGame),
        takeLatest(gameTypes.START_GAME, startGame),
        takeLatest(gameTypes.END_GAME_TEACHER, endGame),
    ]);
}