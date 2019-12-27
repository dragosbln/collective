import {types} from './types';

export const actions = {
    getGroupList: payload => ({
        type: types.GET_GROUP_LIST,
        payload,
      }),
    requestGetGroupList: () => ({
        type: types.REQUEST_GET_GROUP_LIST,
    }),
    receiveGetGroupList: groups => ({
        type: types.RECEIVE_GET_GROUP_LIST,
        groups,
    }),
    receiveGetGroupListFail: () => ({
        type: types.RECEIVE_GET_GROUP_LIST_FAIL,
    }),
}