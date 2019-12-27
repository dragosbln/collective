import { types } from "./types";


const initialState = {
    institutions: [],
    listLoader: false,
};

const institution = (state = initialState, action) => {
    switch(action.type) {
        case types.REQUEST_GET_INSTITUTION_LIST:
            return { ...state, listLoader: true };
        case types.RECEIVE_GET_INSTITUTION_LIST:
            return { ...state, institutions: action.institutions, listLoader: false }; ////
        case types.RECEIVE_GET_INSTITUTION_LIST_FAIL:
            return { ...state, listLoader: false };

        default:
            return state;
    }
}

export default institution;


export { actions } from './actions';
export { types } from './types';
export { selectors } from './selectors';