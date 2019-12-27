import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { questionApi } from '../api';

import {
    questionTypes,
    questionActions,
    userSelectors,
} from '../redux';


const addQuestion = function* (action) {
    yield put(questionActions.requestAddQuestion());
    try {
        const response = yield call(questionApi.addQuestion, action.payload);
        yield put(questionActions.receiveAddQuestion(response.data.data)); 
        //get teacher category list
        const currentUser = yield select(userSelectors.getCurrentUser);
        typeof action.callback === 'function' && action.callback();
        const categoryList = yield call(questionApi.getTeacherCategoriesList, currentUser.id);
        yield put(questionActions.receiveGetTeacherCategoryList(categoryList.data.data));
    } catch (e) {
        yield put(questionActions.receiveAddQuestionFail());
    }
};

const updateQuestion = function* (action) {
    yield put(questionActions.requestUpdateQuestion());

    try {
        const response = yield call(questionApi.updateQuestion, action);
        yield put(questionActions.receiveUpdateQuestion(response.data.data));
         //get teacher category list
        const currentUser = yield select(userSelectors.getCurrentUser);
        const categoryList = yield call(questionApi.getTeacherCategoriesList, currentUser.id);
        yield put(questionActions.receiveGetTeacherCategoryList(categoryList.data.data));
    } catch (e) {
        yield put(questionActions.receiveUpdateQuestionFail());
    }
};

const deleteQuestion = function* (action) {
    yield put(questionActions.requestDeleteQuestion());

    try {
        const response = yield call(questionApi.deleteQuestion, action.id);
        yield put(questionActions.receiveDeleteQuestion(action.id));
    } catch (e) {
        yield put(questionActions.receiveDeleteQuestionFail());
    }
};

const getQuestion = function* (action) {
    yield put(questionActions.requestGetQuestion());

    try {
        const response = yield call(questionApi.getQuestion, action.payload);
        yield put(questionActions.receiveGetQuestion(response.data.data));
    } catch (e) {
        yield put(questionActions.receiveGetQuestionListFail());
    }
};

const getQuestionList = function* (action) {
    yield put(questionActions.requestGetQuestionList());

    try {
        const response = yield call(questionApi.getQuestionList, action.payload);
        yield put(questionActions.receiveGetQuestionList(response.data.data));
    } catch (e) {
        yield put(questionActions.receiveGetQuestionListFail());
    }
};

const getTeacherCategoryList = function* (action) {
    yield put(questionActions.requestGetTeacherCategoryList());
    const currentUser = yield select(userSelectors.getCurrentUser);
    try {
        const response = yield call(questionApi.getTeacherCategoriesList, currentUser.id);
        yield put(questionActions.receiveGetTeacherCategoryList(response.data.data));
    } catch (e) {
        yield put(questionActions.receiveGetTeacherCategoryListFail());
    }
};


export default function* () {
    yield all([
        takeLatest(questionTypes.ADD_QUESTION, addQuestion),
        takeLatest(questionTypes.UPDATE_QUESTION, updateQuestion),
        takeLatest(questionTypes.DELETE_QUESTION, deleteQuestion),
        takeLatest(questionTypes.GET_QUESTION, getQuestion),
        takeLatest(questionTypes.GET_QUESTION_LIST, getQuestionList),
        takeLatest(questionTypes.GET_TEACHER_CATEGORY_LIST, getTeacherCategoryList),
    ]);
}