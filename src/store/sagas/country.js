import { put } from 'redux-saga/effects';

import * as actions from '../actions';
import http from '../../utils/http';

export function* getCountrySaga({ id }) {
    try {

        const response = yield http.get(`https://api.covid19api.com/premium/country/${id}`);

        yield put(actions.getCountrySuccess(id, response.data[response.data.length - 1]));
    } catch (error) {
        yield put(actions.getCountryFailure(id));
    }
}