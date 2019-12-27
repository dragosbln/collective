import { types } from "./types";

// ---- Helpers ----
// just in case we need some more complex state processing functions, add them here

// ---- REDUCER ----
const initialState = {
    currentQuestion: [],
    leaderboardPlayers: [],
    players: [],
    channelStatus: 'off',
    allowReconnect: true,
    listLoader: false,
    buttonLoader: false,
    dialogLoader: false,
    bigLoader: false,
    showLeaderboard: false,
    waitingFlag: false
};

const game = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_START_GAME:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_START_GAME:
            return { ...state, buttonLoader: false };
        case types.RECEIVE_START_GAME_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_ACTIVATE_GAME:
            return state;
        case types.RECEIVE_ACTIVATE_GAME:
            return state;
        case types.RECEIVE_ACTIVATE_GAME_FAIL:
            return state;

        case types.REQUEST_JOIN_GAME:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_JOIN_GAME:
            return { ...state, buttonLoader: false };
        case types.RECEIVE_JOIN_GAME_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_SUBMIT_ANSWER:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_SUBMIT_ANSWER:
            return { ...state, buttonLoader: false };
        case types.RECEIVE_SUBMIT_ANSWER_FAIL:
            return { ...state, buttonLoader: false };
        
        case types.REQUEST_GET_CURRENT_QUESTION:
            return state;
        case types.RECEIVE_GET_CURRENT_QUESTION:
            return { ...state, currentQuestion: action.question, showLeaderboard: false, waitingFlag: false };
        case types.RECEIVE_GET_CURRENT_QUESTION_FAIL:
            return state;

        case types.RECEIVE_GET_CURRENT_QUESTION_TEACHER:
            return { ...state, currentQuestion: action.question, showLeaderboard: true, waitingFlag: false };
        case types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST_TEACHER:
            return { ...state, leaderboardPlayers: action.leaderboardPlayers, showLeaderboard: true, waitingFlag: false };

        case types.CHANNEL_ON:
            return {...state, channelStatus: 'on' };
        case types.CHANNEL_OFF:
            return {...state, channelStatus: 'off'};
        case types.ADD_TASK:
            return {...state, taskList: action.updatedTaskList};
        case types.NEW_PLAYER:
            return {...state, players: [...state.players, action.payload ]};
        case types.GET_CONNECTED_PLAYERS:
            return {...state, players: action.players};
        case types.SET_LEADERBOARD_FLAG:
            return {...state, showLeaderboard: action.value};
        case types.CANCEL_RECONNECT_FLAG:
            return {...state, allowReconnect: false};
        case types.SET_WAITING_FLAG:
            return {...state, waitingFlag: action.value };

        case types.REQUEST_GET_LEADERBOARD_PLAYERS_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST:
            return { ...state, leaderboardPlayers: action.leaderboardPlayers, showLeaderboard: true, waitingFlag: false };
        case types.RECEIVE_GET_LEADERBOARD_PLAYERS_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
};

export default game;

// forward exports
export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';
