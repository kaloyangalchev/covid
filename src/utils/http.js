import axios from 'axios';

const http = axios.create({
    headers: {
      'X-Access-Token': '5cf9dfd5-3449-485e-b5ae-70a60e997864',
    }
  });

// NOTE:
//  Interceptor for all requests

http.interceptors.request.use((config) => {

    // TODO:
    //  Add your request interceptor logic here: setting headers, authorization etc.

    return config;
}, (error) => {

    // TODO:
    //  Add your error handlers here

    return Promise.reject(error);
});

// NOTE:
//  Interceptor for all responses

http.interceptors.response.use((response) => {

    // TODO:
    //  Add logic for successful response

    return response;
}, (error) => {

    // TODO:
    //  Add logic for any error from backend

    return Promise.reject(error);
});

export default http;