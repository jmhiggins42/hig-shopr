import axios from 'axios';

let baseUrl = process.env.REACT_APP_API_DOMAIN || '';
baseUrl += '/api/library';

export const getAllLibrary = () => {
  const config = {
    method: 'GET',
    withCredentials: true
  };

  return axios(baseUrl, config)
    .then(successResponseHandler)
    .catch(errorResponseHandler);
};

const successResponseHandler = result => result.data;
const errorResponseHandler = err => Promise.reject(err);
