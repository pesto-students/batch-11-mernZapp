/* eslint-disable no-console */
import axios from 'axios';
// import { setAlert } from './alert';
import { BASE_URL } from '../../utils/env';
import setAuthToken from '../../utils/setAuthToken';

const services = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const formData = { email: 'test5@gmail.com', password: '123456' };
  //   const body = JSON.stringify({ email, password });
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const loginApi = '/users/login';
    const res = await axios.get(`${BASE_URL}${loginApi}`, formData, config);
    // const res = await axios.get(`${BASE_URL}${servicesApi}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export default services;
