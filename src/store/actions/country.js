import {
    GET_COUNTRY_REQUEST,
    GET_COUNTRY_SUCCESS,
    GET_COUNTRY_FAILURE,
} from "../types";

export const getCountryRequest = (id) => {
    return {
        type: GET_COUNTRY_REQUEST,
        id,
    }
}

export const getCountrySuccess = (id, country) => {
    return {
        type: GET_COUNTRY_SUCCESS,
        id,
        country,
    }
}

export const getCountryFailure = (id) => {
    return {
        type: GET_COUNTRY_FAILURE,
        id,
    }
}