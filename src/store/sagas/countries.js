import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import http from '../../utils/http';

export function* getCountriesSaga() {
    try {
        const response = yield http.get("https://api.covid19api.com/summary");
        
        yield put(actions.getCountriesSuccess(response.data.Countries));
    } catch (error) {
        yield put(actions.getCountriesFailure());
    }
}