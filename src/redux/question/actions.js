import { types } from "./types";

export const actions = {
    addQuestion: (payload, callback) => ({
        type: types.ADD_QUESTION,
        payload,
        callback
    }),
    requestAddQuestion: () => ({
        type: types.REQUEST_ADD_QUESTION,
    }),
    receiveAddQuestion: question => ({
        type: types.RECEIVE_ADD_QUESTION,
        question
    }),
    receiveAddQuestionFail: () => ({
        type: types.RECEIVE_ADD_QUESTION_FAIL,
    }),

    updateQuestion: (payload, id) => ({
        type: types.UPDATE_QUESTION,
        payload,
        id
    }),
    requestUpdateQuestion: () => ({
        type: types.REQUEST_UPDATE_QUESTION,
    }),
    receiveUpdateQuestion: question => ({
        type: types.RECEIVE_UPDATE_QUESTION,
        question
    }),
    receiveUpdateQuestionFail: () => ({
        type: types.RECEIVE_UPDATE_QUESTION_FAIL,
    }),

    deleteQuestion: id => ({
        type: types.DELETE_QUESTION,
        id,
    }),
    requestDeleteQuestion: () => ({
        type: types.REQUEST_DELETE_QUESTION,
    }),
    receiveDeleteQuestion: id => ({
        type: types.RECEIVE_DELETE_QUESTION,
        id
    }),
    receiveDeleteQuestionFail: () => ({
        type: types.RECEIVE_DELETE_QUESTION_FAIL,
    }),

    getQuestion: payload => ({
        type: types.GET_QUESTION,
        payload,
    }),
    requestGetQuestion: () => ({
        type: types.REQUEST_GET_QUESTION,
    }),
    receiveGetQuestion: question => ({
        type: types.RECEIVE_GET_QUESTION,
        question
    }),
    receiveGetQuestionFail: () => ({
        type: types.RECEIVE_GET_QUESTION_FAIL,
    }),

    getQuestionList: payload => ({
        type: types.GET_QUESTION_LIST,
        payload,
    }),
    requestGetQuestionList: () => ({
        type: types.REQUEST_GET_QUESTION_LIST,
    }),
    receiveGetQuestionList: questions => ({
        type: types.RECEIVE_GET_QUESTION_LIST,
        questions,
    }),
    receiveGetQuestionListFail: () => ({
        type: types.RECEIVE_GET_QUESTION_LIST_FAIL,
    }),

    getTeacherCategoryList: () => ({
        type: types.GET_TEACHER_CATEGORY_LIST,
    }),
    requestGetTeacherCategoryList: () => ({
        type: types.REQUEST_GET_TEACHER_CATEGORY_LIST,
    }),
    receiveGetTeacherCategoryList: teacherCategories => ({
        type: types.RECEIVE_GET_TEACHER_CATEGORY_LIST,
        teacherCategories,
    }),
    receiveGetTeacherCategoryListFail: () => ({
        type: types.RECEIVE_GET_TEACHER_CATEGORY_LIST_FAIL,
    }),
};