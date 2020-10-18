import Immutable from 'immutable';

import { GET_COUNTRIES_SUCCESS } from '../types';

const initialState = Immutable.fromJS({
    all: []
});

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES_SUCCESS:
            return state.set('all', action.countries);
        default:
            return state;
    }
}