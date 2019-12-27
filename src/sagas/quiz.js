import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { quizApi } from '../api';

import {
    quizActions,
    quizTypes,
    userSelectors
} from '../redux';

const addActiveQuiz = function* (action) {
    yield put(quizActions.requestAddActiveQuiz());
    try {
        const response = yield call(quizApi.addActiveQuiz, action.payload);
        yield put(quizActions.receiveAddActiveQuiz(response.data.data));
    } catch (e) {
        yield put(quizActions.receiveAddActiveQuizFail());
    }
};

const updateActiveQuiz = function* (action) {
    yield put(quizActions.requestUpdateActiveQuiz());

    try {
        const response = yield call(quizApi.updateActiveQuiz, action.payload);
        yield put(quizActions.receiveUpdateActiveQuiz(response.data.data));
    } catch (e) {
        yield put(quizActions.receiveUpdateActiveQuizFail());
    }
};

const deleteActiveQuiz = function* (action) {
    yield put(quizActions.requestDeleteActiveQuiz());

    try {
        const response = yield call(quizApi.deleteActiveQuiz, action.id);
        yield put(quizActions.receiveDeleteActiveQuiz(action.id));
    } catch (e) {
        yield put(quizActions.receiveDeleteActiveQuizFail());
    }
};

const getActiveQuizList = function* (action) {
    yield put(quizActions.requestGetActiveQuizList());

    try {
        const response = yield call(quizApi.getActiveQuizList);
        yield put(quizActions.receiveGetActiveQuizList(response.data.data));
    } catch (e) {
        yield put(quizActions.receiveGetActiveQuizListFail());
    }
};

const getTeacherQuizList = function* (action) {
    yield put(quizActions.requestGetTeacherQuizList());
    const currentUser = yield select(userSelectors.getCurrentUser);
    try {
        const response = yield call(quizApi.getTeacherQuizList(currentUser.id));
        yield put(quizActions.receiveGetTeacherQuizList(response.data.data));
    } catch (e) {
        yield put(quizActions.receiveGetTeacherQuizListFail());
    }
};

export default function* () {
    yield all([
        takeLatest(quizTypes.ADD_ACTIVE_QUIZ, addActiveQuiz),
        takeLatest(quizTypes.UPDATE_ACTIVE_QUIZ, updateActiveQuiz),
        takeLatest(quizTypes.DELETE_ACTIVE_QUIZ, deleteActiveQuiz),
        takeLatest(quizTypes.GET_ACTIVE_QUIZ_LIST, getActiveQuizList),
    ]);
}