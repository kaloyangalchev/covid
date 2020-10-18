import {
    GET_HISTORY_REQUEST,
    GET_HISTORY_SUCCESS,
    GET_HISTORY_FAILURE,
} from "../types";

export const getHistoryRequest = (id) => {
    return {
        type: GET_HISTORY_REQUEST,
        id,
    }
}

export const getHistorySuccess = (id, history) => {
    return {
        type: GET_HISTORY_SUCCESS,
        id,
        history,
    }
}

export const getHistoryFailure = (id) => {
    return {
        type: GET_HISTORY_FAILURE,
        id,
    }
}