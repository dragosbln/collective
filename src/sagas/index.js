import { all, take, put, call, race, fork, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import userSaga from './user';
import institutionSaga from './institution';
import groupSaga from './group';
import gameSaga from './game';
import quizSaga from './quiz';
import hostSaga from './host';
import questionSaga from './question';

import { userActions, userTypes } from '../redux';
import { userApi } from '../api';

const getCurrentUser = function* () {
    yield put(userActions.requestGetCurrentUser());
    yield delay(2000);
    try {
        const response = yield call(userApi.getCurrentUser);
        yield put(userActions.receiveGetCurrentUser(response.data.data));
    } catch (error) {
        yield put(userActions.receiveGetCurrentUserFail());
        yield put(push('/login'));
    }
};

export default function* rootSaga() {
    const token = localStorage.getItem('access_token');
    
    if (token) {
        // if there is a token get the currentUser before taking any other sagas;
        // using 'take' will block any actions from being caught;
        yield take(userTypes.GET_CURRENT_USER);
        yield fork(getCurrentUser);
        yield race({
            success: take('RECEIVE_GET_CURRENT_USER'),
            fail: take('RECEIVE_GET_CURRENT_USER_FAIL'),
        });
    }

    yield all([
        userSaga(),
        institutionSaga(),
        groupSaga(),
        gameSaga(),
        quizSaga(),
        hostSaga(),
        questionSaga(),
    ]);
}