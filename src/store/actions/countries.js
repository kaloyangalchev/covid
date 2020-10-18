import {
    GET_COUNTRIES_REQUEST,
    GET_COUNTRIES_SUCCESS,
    GET_COUNTRIES_FAILURE,
} from "../types";

export const getCountriesRequest = () => {
    return { type: GET_COUNTRIES_REQUEST }
}

export const getCountriesSuccess = (countries) => {
    return {
        type: GET_COUNTRIES_SUCCESS,
        countries,
    }
}

export const getCountriesFailure = () => {
    return { type: GET_COUNTRIES_FAILURE }
}