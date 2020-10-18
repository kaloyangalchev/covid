import Immutable from 'immutable';

import { GET_HISTORY_SUCCESS } from '../types';

const initialState = Immutable.fromJS({
    all: {}
});

export const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HISTORY_SUCCESS:
            return state.setIn(['all', action.id], action.history);
        default:
            return state;
    }
}