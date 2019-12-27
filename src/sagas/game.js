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
const connect = gameId => {
    socket = io(socketServerURL);
    return new Promise((resolve) => {
        socket.on('connect', () => {
            const token = localStorage.getItem('access_token');
            socket.emit('INIT_STUDENT', { gameId, token });
            resolve(socket);
        });
    });
};

const createConnectionsChannel = socket => eventChannel(emit => {
    const handleNewPlayer = (data) => {
        emit(gameActions.newPlayer(data));
    };
    const getConnectedPlayers = (data) => {
        emit(gameActions.getConnectedPlayers(data));
    };
    const startGame = (data) => {
        emit(gameActions.receiveStartGame(data));
    };
    const gameNotAvailable = () => {
        emit(gameActions.gameNotAvailable());
    };
    const endGame = () => {
        emit(gameActions.endGame());
    };
    const getQuestion = data => {
        emit(gameActions.receiveGetCurrentQuestion(data));
    };
    const getLeaderboard = data => {
        emit(gameActions.setLeaderBoard(true));

        // delay to show the list animations
        setTimeout(() => {
            emit(gameActions.receiveGetLeaderboardPlayersList(data));
        }, 700);
    };

    socket.on(socketActions.NEW_PLAYER_CONNECTED, handleNewPlayer);
    socket.on(socketActions.GET_CONNECTED_PLAYERS, getConnectedPlayers);
    socket.on(socketActions.START_GAME, startGame);
    socket.on(socketActions.GAME_NOT_AVAILABLE, gameNotAvailable);
    socket.on(socketActions.END_GAME, endGame);
    socket.on(socketActions.GET_QUESTION, getQuestion);
    socket.on(socketActions.GET_LEADERBOARD, getLeaderboard);

    return () => {
        socket.off(socketActions.NEW_PLAYER_CONNECTED, handleNewPlayer);
        socket.off(socketActions.GET_CONNECTED_PLAYERS, getConnectedPlayers);
        socket.off(socketActions.START_GAME, startGame);
        socket.off(socketActions.END_GAME, endGame);
        socket.off(socketActions.GET_QUESTION, getQuestion);
        socket.off(socketActions.GET_LEADERBOARD, getLeaderboard);
        socket.disconnect(true);
    };
});

const receiveStartGame = function* () {
    yield put(gameActions.cancelReconnectFlag());
    // yield put(gameActions.setWaitingFlag(false));
};


// -------- smaller sagas for game flow control ----------
const submitAnswer = function* (action) {
    socket.emit(gameTypes.SUBMIT_ANSWER, action.answerId);
};

const socketHandler = function* (channel) {
    yield put(gameActions.receiveJoinGame({}));
    yield put(gameActions.setWaitingFlag(true));
    yield put(gameActions.cancelReconnectFlag());
    yield put(push('/game'));

    while (true) {
        const action = yield take(channel);
        yield put(action);
    }
};

const joinGame = function* (action) {
    try {
        yield put(gameActions.requestJoinGame());

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
        
        localStorage.setItem('currentGame', action.id);

        // blocking action for closing the channel and the socket
        yield take(gameTypes.STOP_CHANNEL);
        socketChannel.close();
        yield cancel(mainThread);
    } catch (error) {
        yield put(gameActions.receiveJoinGameFail());
        socket.disconnect(true);
        // TODO: show some kind of message in the UI
        yield put(push('/home/active'));
    } finally {
        if (yield cancelled()) {
            console.warn('SOCKET DISCONNECTED: Saga cancelled');
            socket.disconnect(true);
            yield put(gameActions.stopChannel());
        }
    }
};

const endGame = function* () {
    localStorage.removeItem('currentGame');
    yield delay(5000);
    yield put(push('/home/active'));
};

export default function* () {
    yield all([
        takeLatest(gameTypes.JOIN_GAME, joinGame),
        takeLatest(gameTypes.END_GAME, endGame),
        takeLatest(gameTypes.RECEIVE_START_GAME, receiveStartGame),
        takeLatest(gameTypes.SUBMIT_ANSWER, submitAnswer),
    ]);
}
