import { types } from "./types";
import { quizzes } from '../../utils/mockData'

// ---- Helpers ----
// just in case we need some more complex state processing functions, add them here

// ---- REDUCER ----
const initialState = {
    activeQuizzes: [],
    teacherQuizzes:quizzes,
    listLoader: false,
    buttonLoader: false,
    dialogLoader: false,
    bigLoader: false
};

const quiz = (state = initialState, action) => {
    switch(action.type) {

        case types.REQUEST_ADD_ACTIVE_QUIZ:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_ADD_ACTIVE_QUIZ:
            return { ...state, activeQuizzes: state.activeQuizzes.concat(action.activeQuiz),  buttonLoader: false };
        case types.RECEIVE_ADD_ACTIVE_QUIZ_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_UPDATE_ACTIVE_QUIZ:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_UPDATE_ACTIVE_QUIZ:
            return { ...state, activeQuizzes: state.activeQuizzes.map(obj => obj.id === action.activeQuiz.id ? action.activeQuiz : obj), dialogLoader: false }; 
        case types.RECEIVE_UPDATE_ACTIVE_QUIZ_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_DELETE_ACTIVE_QUIZ:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_DELETE_ACTIVE_QUIZ:
            return { ...state, activeQuizzes: state.activeQuizzes.filter(x => x.id != action.id), dialogLoader: false }; 
        case types.RECEIVE_DELETE_ACTIVE_QUIZ_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_GET_ACTIVE_QUIZ_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_ACTIVE_QUIZ_LIST:
            return { ...state, activeQuizzes: action.activeQuizzes, listLoader: false };
        case types.RECEIVE_GET_ACTIVE_QUIZ_LIST_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_TEACHER_QUIZ_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_TEACHER_QUIZ_LIST:
            return { ...state, teacherQuizzes: action.teacherQuizzes, listLoader: false };
        case types.RECEIVE_GET_TEACHER_QUIZ_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
};

export default quiz;

// forward exports
export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';