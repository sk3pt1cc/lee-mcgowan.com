import axios from 'axios';

const urlPrefix = 'https://9yq1et8l72.execute-api.eu-west-1.amazonaws.com/test';

export const get = url => axios.get(`${urlPrefix}/${url}`);
export const post = (url, body) => axios.post(`${urlPrefix}/${url}`, body);