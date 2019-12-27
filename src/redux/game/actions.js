import { types } from "./types";

export const actions = {
    activateGame: (id, groupId) => ({
        type: types.ACTIVATE_GAME,
        id,
        groupId
    }),
    requestActivateGame: () => ({
        type: types.REQUEST_ACTIVATE_GAME,
    }),
    receiveActivateGame: () => ({
        type: types.RECEIVE_ACTIVATE_GAME,
    }),
    receiveActivateGameFail: status => ({
        type: types.RECEIVE_ACTIVATE_GAME_FAIL,
        status
    }),

    startGame: payload => ({
        type: types.START_GAME,
        payload
    }),
    requestStartGame: () => ({
        type: types.REQUEST_START_GAME,
    }),
    receiveStartGame: game => ({
        type: types.RECEIVE_START_GAME,
        game
    }),
    receiveStartGameFail: () => ({
        type: types.RECEIVE_START_GAME_FAIL,
    }),

    joinGame: (id) => ({
        type: types.JOIN_GAME,
        id
    }),
    requestJoinGame: () => ({
        type: types.REQUEST_JOIN_GAME,
    }),
    receiveJoinGame: game => ({
        type: types.RECEIVE_JOIN_GAME,
        game
    }),
    receiveJoinGameFail: () => ({
        type: types.RECEIVE_JOIN_GAME_FAIL,
    }),

    submitAnswer: answerId => ({
        type: types.SUBMIT_ANSWER,
        answerId
    }),
    requestSubmitAnswer: () => ({
        type: types.REQUEST_SUBMIT_ANSWER,
    }),
    receiveSubmitAnswer: user => ({
        type: types.RECEIVE_SUBMIT_ANSWER,
        user
    }),
    receiveSubmitAnswerFail: () => ({
        type: types.RECEIVE_SUBMIT_ANSWER_FAIL,
    }),

    getCurrentQuestion: payload => ({
        type: types.GET_CURRENT_QUESTION,
        payload,
    }),
    requestGetCurrentQuestion: () => ({
        type: types.REQUEST_GET_CURRENT_QUESTION,
    }),
    receiveGetCurrentQuestion: question => ({
        type: types.RECEIVE_GET_CURRENT_QUESTION,
        question
    }),
    receiveGetCurrentQuestionFail: () => ({
        type: types.RECEIVE_GET_CURRENT_QUESTION_FAIL,
    }),

    receiveGetCurrentQuestionTeacher: question => ({
        type: types.RECEIVE_GET_CURRENT_QUESTION_TEACHER,
        question
    }),
    receiveGetLeaderboardPlayersListTeacher: leaderboardPlayers => ({
        type: types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST_TEACHER,
        leaderboardPlayers,
    }),
    endGameTeacher: () => ({
        type: types.END_GAME_TEACHER,
    }),

    startChannel: () => ({
        type: types.START_CHANNEL,
    }),
    endGame: () => ({
        type: types.END_GAME,
    }),
    stopChannel: () => ({
        type: types.STOP_CHANNEL,
    }),
    newPlayer: payload => ({
        type: types.NEW_PLAYER,
        payload
    }),
    getConnectedPlayers: players => ({
        type: types.GET_CONNECTED_PLAYERS,
        players
    }),
    gameNotAvailable: () => ({
        type: types.GAME_NOT_AVAILABLE,
    }),
    cancelReconnectFlag: () => ({
        type: types.CANCEL_RECONNECT_FLAG,
    }),
    setLeaderBoard: (value = true) => ({
        type: types.SET_LEADERBOARD_FLAG,
        value
    }),
    setWaitingFlag: value => ({
        type: types.SET_WAITING_FLAG,
        value
    }),

    getLeaderboardPlayersList: payload => ({
        type: types.GET_LEADERBOARD_PLAYERS_LIST,
        payload,
    }),
    requestGetLeaderboardPlayersList: () => ({
        type: types.REQUEST_GET_LEADERBOARD_PLAYERS_LIST,
    }),
    receiveGetLeaderboardPlayersList: leaderboardPlayers => ({
        type: types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST,
        leaderboardPlayers,
    }),
    receiveGetLeaderboardPlayersListFail: () => ({
        type: types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST_FAIL,
    }),
};