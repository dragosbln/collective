import { types } from "./types";
import { quizzes } from '../../utils/mockData'

// ---- Helpers ----
// just in case we need some more complex state processing functions, add them here

// ---- REDUCER ----
const initialState = {
    questions: [],
    listLoader: false,
    buttonLoader: false,
    dialogLoader: false,
    bigLoader: false,
    teacherCategories: [],
};

const question = (state = initialState, action) => {
    switch(action.type) {

        case types.REQUEST_GET_QUESTION:
            return state;
        case types.RECEIVE_GET_QUESTION:
            return state;
        case types.RECEIVE_GET_QUESTION_FAIL:
            return state;

        case types.REQUEST_ADD_QUESTION:
            return { ...state, buttonLoader: true };
        case types.RECEIVE_ADD_QUESTION:
            return { ...state, buttonLoader: false, registerSuccessMessage: true }; // TODO: add the new question in
        case types.RECEIVE_ADD_QUESTION_FAIL:
            return { ...state, buttonLoader: false };

        case types.REQUEST_UPDATE_QUESTION:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_UPDATE_QUESTION:
            return { ...state, dialogLoader: false }; // TODO: update the question in the store data
        case types.RECEIVE_UPDATE_QUESTION_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_DELETE_QUESTION:
            return { ...state, dialogLoader: true };
        case types.RECEIVE_DELETE_QUESTION:
            return { ...state, dialogLoader: false };
        case types.RECEIVE_DELETE_QUESTION_FAIL:
            return { ...state, dialogLoader: false };

        case types.REQUEST_GET_QUESTION_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_QUESTION_LIST:
            return { ...state, questions: action.questions, listLoader: false };
        case types.RECEIVE_GET_QUESTION_LIST_FAIL:
            return { ...state, listLoader: false };

        case types.REQUEST_GET_TEACHER_CATEGORY_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_TEACHER_CATEGORY_LIST:
            return { ...state, teacherCategories: action.teacherCategories, listLoader: false };
        case types.RECEIVE_GET_TEACHER_CATEGORY_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
};

export default question;

// forward exports
export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';
