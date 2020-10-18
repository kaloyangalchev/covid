import { combineReducers } from 'redux-immutable';
import { countriesReducer } from './countries';
import { countryReducer } from './country';
import { historyReducer } from './history';

const appReducer = combineReducers({
    countries: countriesReducer,
    country: countryReducer,
    history: historyReducer,
});

export default appReducer;