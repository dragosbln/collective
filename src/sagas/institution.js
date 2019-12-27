import { call, put, takeLatest, all } from "redux-saga/effects";
import { push } from "connected-react-router";
import { institutionApi } from "../api";

import {
  	institutionActions,
	institutionTypes,
	institutionSelectors
} from "../redux";

const getInstitutionList = function*(action) {
	yield put(institutionActions.requestGetInstitutionList());

	try {
		const response = yield call(institutionApi.getInstitutionList);
		yield put(institutionActions.receiveGetInstitutionList(response.data.data));
	} catch (e) {
		yield put(institutionActions.receiveGetInstitutionListFail());
	}
};

export default function*() {
	yield all([
		takeLatest(institutionTypes.GET_INSTITUTION_LIST, getInstitutionList)
	]);
}
