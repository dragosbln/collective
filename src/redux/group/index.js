import { types } from "./types";


const initialState = {
    groups: [],
    listLoader: false,
};

const group = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_GROUP_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_GROUP_LIST:
            return { ...state, groups: action.groups, listLoader: false };
        case types.RECEIVE_GET_GROUP_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
}

export default group;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';