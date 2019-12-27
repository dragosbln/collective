import { types } from "./types";

export const actions = {

    addActiveQuiz: payload => ({
        type: types.ADD_ACTIVE_QUIZ,
        payload
    }),
    requestAddActiveQuiz: () => ({
        type: types.REQUEST_ADD_ACTIVE_QUIZ,
    }),
    receiveAddActiveQuiz: activeQuiz => ({
        type: types.RECEIVE_ADD_ACTIVE_QUIZ,
        activeQuiz
    }),
    receiveAddActiveQuizFail: () => ({
        type: types.RECEIVE_ADD_ACTIVE_QUIZ_FAIL,
    }),

    updateActiveQuiz: payload => ({
        type: types.UPDATE_ACTIVE_QUIZ,
        payload
    }),
    requestUpdateActiveQuiz: () => ({
        type: types.REQUEST_UPDATE_ACTIVE_QUIZ,
    }),
    receiveUpdateActiveQuiz: activeQuiz => ({
        type: types.RECEIVE_UPDATE_ACTIVE_QUIZ,
        activeQuiz
    }),
    receiveUpdateActiveQuizFail: () => ({
        type: types.RECEIVE_UPDATE_ACTIVE_QUIZ_FAIL,
    }),

    deleteActiveQuiz: id => ({
        type: types.DELETE_ACTIVE_QUIZ,
        id,
    }),
    requestDeleteActiveQuiz: () => ({
        type: types.REQUEST_DELETE_ACTIVE_QUIZ,
    }),
    receiveDeleteActiveQuiz: id => ({
        type: types.RECEIVE_DELETE_ACTIVE_QUIZ,
        id
    }),
    receiveDeleteActiveQuizFail: () => ({
        type: types.RECEIVE_DELETE_ACTIVE_QUIZ_FAIL,
    }),

    getActiveQuizList: payload => ({
        type: types.GET_ACTIVE_QUIZ_LIST,
        payload,
    }),
    requestGetActiveQuizList: () => ({
        type: types.REQUEST_GET_ACTIVE_QUIZ_LIST,
    }),
    receiveGetActiveQuizList: activeQuizzes => ({
        type: types.RECEIVE_GET_ACTIVE_QUIZ_LIST,
        activeQuizzes,
    }),
    receiveGetActiveQuizListFail: () => ({
        type: types.RECEIVE_GET_ACTIVE_QUIZ_LIST_FAIL,
    }),

    getTeacherQuizList: payload => ({
        type: types.GET_TEACHER_QUIZ_LIST,
        payload,
    }),
    requestGetTeacherQuizList: () => ({
        type: types.REQUEST_GET_TEACHER_QUIZ_LIST,
    }),
    receiveGetTeacherQuizList: teacherQuizzes => ({
        type: types.RECEIVE_GET_TEACHER_QUIZ_LIST,
        teacherQuizzes,
    }),
    receiveGetTeacherQuizListFail: () => ({
        type: types.RECEIVE_GET_TEACHER_QUIZ_LIST_FAIL,
    }),
};