import { call, put, takeLatest, all } from "redux-saga/effects";
import { push } from "connected-react-router";
import { groupApi } from "../api";

import {
    groupActions,
    groupTypes,
    groupSelectors
} from "../redux";

const getGroupList = function* (action) {
    yield put(groupActions.requestGetGroupList());

    try {
        const response = yield call(groupApi.getGroupList);
        yield put(groupActions.receiveGetGroupList(response.data.data));
    } catch (e) {
        yield put(groupActions.receiveGetGroupListFail());
    }
};

export default function* () {
    yield all([
        takeLatest(groupTypes.GET_GROUP_LIST, getGroupList)
    ]);
}