import { put } from 'redux-saga/effects';
import moment from 'moment';

import * as actions from '../actions';
import http from '../../utils/http';

export function* getHistorySaga({ id }) {
    try {
        const toDate = moment();
        const fromDate = moment().add(-10, 'days');
        const formattedToDate = toDate.format('YYYY-MM-DDT00:00:00');
        const formattedFromDate = fromDate.format('YYYY-MM-DDT00:00:00');
        const response = yield http.get(`
            https://api.covid19api.com/country/${id}/status/confirmed?from=${formattedFromDate}&to=${formattedToDate}`
        );

        yield put(actions.getHistorySuccess(id, response.data));
    } catch (error) {
        yield put(actions.getHistoryFailure(id));
    }
}