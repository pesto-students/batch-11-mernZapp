import axios from 'axios';
import { setAlert } from './alert';
import { BASE_URL } from '../utils/env';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
} from './types';
import setAuthToken from '../utils/setAuthToken';


export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    // eslint-disable-next-line no-undef
    // setAuthToken(localStorage.token);
  }
  const loginApi = '/users/login';

  try {
    const res = await axios.get(`${BASE_URL}${loginApi}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};


export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ username, email, password });
  const registerApi = '/users/create';
  try {
    const res = await axios.post(`${BASE_URL}${registerApi}`, body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err) {
      dispatch(setAlert('Registration failed', 'danger'));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  const loginApi = '/users/login';

  try {
    const res = await axios.post(`${BASE_URL}${loginApi}`, body, config);
    if (res) {
      localStorage.setItem('token', res.data.token);
    }
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    if (err) {
      dispatch(setAlert('Invalid Username or Password', 'danger'));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
