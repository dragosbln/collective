import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user';
import institution from './institution';
import group from './group';
import quiz from './quiz';
import game from './game';
import question from './question';

/*
    Contains the root reducer
    @history is passed here to connect the router to redux, as it's own reducer
 */
export default history => combineReducers({
    router: connectRouter(history),
    user,
    institution,
    group,
    game,
    quiz,
    question,
});

export {
    types as userTypes,
    actions as userActions,
    selectors as userSelectors,
} from './user';

export {
    types as institutionTypes,
    actions as institutionActions,
    selectors as institutionSelectors,
} from './institution';

export {
    types as groupTypes,
    actions as groupActions,
    selectors as groupSelectors,
} from './group';

export {
    types as gameTypes,
    actions as gameActions,
    selectors as gameSelectors,
} from './game';

export {
    types as quizTypes,
    actions as quizActions,
    selectors as quizSelectors,
} from './quiz';

export {
    types as questionTypes,
    actions as questionActions,
    selectors as questionSelectors,
} from './question';
