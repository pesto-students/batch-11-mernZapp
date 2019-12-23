/* eslint-disable no-console */
import { GET_SERVICES, GET_ACTION } from './types';

const zappService = () => async (dispatch) => {
  // eslint-disable-next-line no-undef
  if (localStorage.token) {
    // eslint-disable-next-line no-undef
    // setAuthToken(localStorage.token);
  }

  const { token } = localStorage;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: `Bearer ${token}`,
    },
  };
  console.log(token);
  console.log(config);

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
// /actions/:service
const zappAction = () => async (dispatch) => {
  if (localStorage.token) {
    // eslint-disable-next-line no-undef
    // setAuthToken(localStorage.token);
  }
  const { token } = localStorage;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      token: `Bearer ${token}`,
    },
  };
  console.log(token);
  console.log(config);

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
  return undefined;
};

export { zappService, zappAction };
