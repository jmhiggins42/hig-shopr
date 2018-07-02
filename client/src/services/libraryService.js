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

export const getById = id => {
  const url = `${baseUrl}/${id}`;

  const config = {
    method: 'GET',
    withCredentials: true
  };

  return axios(url, config)
    .then(successResponseHandler)
    .catch(errorResponseHandler);
};

export const create = data => {
  const config = {
    method: 'POST',
    data,
    withCredentials: true
  };

  return axios(baseUrl, config)
    .then(successResponseHandler)
    .catch(errorResponseHandler);
};

export const update = data => {
  const url = `${baseUrl}/${data._id}`;
  const config = {
    method: 'PUT',
    data,
    withCredentials: true
  };

  return axios(url, config)
    .then(successResponseHandler)
    .catch(errorResponseHandler);
};

export const _delete = id => {
  const url = `${baseUrl}/${id}`;
  const config = {
    method: 'DELETE',
    withCredentials: true
  };

  return axios(url, config)
    .then(successResponseHandler)
    .catch(errorResponseHandler);
};

const successResponseHandler = result => result.data;
const errorResponseHandler = err => Promise.reject(err);
