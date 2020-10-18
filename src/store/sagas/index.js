import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import {
    GET_COUNTRIES_REQUEST,
    GET_HISTORY_REQUEST,
    GET_COUNTRY_REQUEST,
} from '../types';
import { getCountriesSaga } from './countries';
import { getCountrySaga } from './country';
import { getHistorySaga } from './history';

export function* watchSagas() {
    yield all([
        takeLatest(GET_COUNTRIES_REQUEST, getCountriesSaga),
        takeLatest(GET_COUNTRY_REQUEST, getCountrySaga),
        takeEvery(GET_HISTORY_REQUEST, getHistorySaga),
    ]);
}