import { GET_SERVICES, GET_ACTION } from '../actions/types';

const initialState = {
  services: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SERVICES:
      return { ...state, services: payload, loading: false };
    case GET_ACTION:
      return { ...state, action: payload, loading: false };
    default:
      return state;
  }
}
