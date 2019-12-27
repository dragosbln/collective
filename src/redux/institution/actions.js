import {types} from './types';

export const actions = {
    getInstitutionList: payload => ({
        type: types.GET_INSTITUTION_LIST,
        payload,
      }),
    requestGetInstitutionList: () => ({
        type: types.REQUEST_GET_INSTITUTION_LIST,
    }),
    receiveGetInstitutionList: institutions => ({
        type: types.RECEIVE_GET_INSTITUTION_LIST,
        institutions,
    }),
    receiveGetInstitutionListFail: () => ({
        type: types.RECEIVE_GET_INSTITUTION_LIST_FAIL,
    }),
}