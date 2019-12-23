import axios from 'axios';
import { setAlert } from './alert';
import { BASE_URL } from '../utils/env';
import { GET_SERVICES, GET_ACTION } from './types';
import setAuthToken from '../utils/setAuthToken';

 const zappService = () => async dispatch => {
  // eslint-disable-next-line no-undef
  if (localStorage.token) {
    // eslint-disable-next-line no-undef
    // setAuthToken(localStorage.token);
}
const token = localStorage.token;
const config = {
  headers: {
    'Content-Type': 'application/json',
    'token': `Bearer ${token}`
  },
};
console.log(token);
  console.log(config);
  const servicesApi = '/services';

  try {
    // const res = await axios.get(`${BASE_URL}${servicesApi}`, config);
    const res = {
      services: [
        'github',
      ],
    };
    dispatch({
      type: GET_SERVICES,
      payload: res,
    });
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};
///actions/:service
const zappAction =  (action) => async dispatch => {
  if (localStorage.token) {
    // eslint-disable-next-line no-undef
    // setAuthToken(localStorage.token);
}
const token = localStorage.token;
const config = {
  headers: {
    'Content-Type': 'application/json',
    'token': `Bearer ${token}`
  },
};
console.log(token);
  console.log(config);
  const actionApi = `/services/${action}`;

  try {
    // const res = await axios.get(`${BASE_URL}${actionApi}`, config);
    const res = {
      services: [
        'githubAction',
      ],
    };

    dispatch({
      type: GET_ACTION,
      payload: res,
    });
    return res;
  } catch (err) {
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};

export { zappService, zappAction };
