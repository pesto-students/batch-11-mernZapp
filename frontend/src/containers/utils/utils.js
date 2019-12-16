import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const loginApi = '/users/login';

const makePostRequest = async (data) => {
    const response = await axios.post(`${baseUrl}${loginApi}`, data);
    return response;
};
export {
  makePostRequest,
};
