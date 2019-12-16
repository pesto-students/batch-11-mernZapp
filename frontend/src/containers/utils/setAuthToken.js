import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

const getToken = () => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
};

export { setAuthToken, getToken };
