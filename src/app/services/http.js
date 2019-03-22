import axios from 'axios';

const urlPrefix = 'http://localhost:9000';

export const get = url => axios.get(`${urlPrefix}/${url}`);