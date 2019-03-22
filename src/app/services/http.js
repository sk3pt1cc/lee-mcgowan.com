import axios from 'axios';

// change to this pre-deploy '/.netlify/functions'
const urlPrefix = 'http://localhost:9000';

export const get = url => axios.get(`${urlPrefix}/${url}`);