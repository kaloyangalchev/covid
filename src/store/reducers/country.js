import Immutable from 'immutable';

import { GET_COUNTRY_SUCCESS } from '../types';

const initialState = Immutable.fromJS({
    all: {}
});

export const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY_SUCCESS:
            return state.setIn(['all', action.id], action.country);
        default:
            return state;
    }
}