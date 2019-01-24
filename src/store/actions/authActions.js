import {SIGN_IN, SIGN_IN_ERROR, SIGN_OUT, SIGN_UP, SIGN_UP_ERROR, API_URL} from './types'

export const signIn = () => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'users/login')
    .then(function (response) {
      dispatch({type: SIGN_IN, user: response.data.data.user});
    })
    .catch(function (error) {
      dispatch({type: SIGN_IN_ERROR, error: response.error});
    });
  }
};

export const signUp = () => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'users')
    .then(function (response) {
      dispatch({type: SIGN_UP, user: response.data.data.user});
    })
    .catch(function (error) {
      dispatch({type: SIGN_UP_ERROR, user: response.error});
    });
  }
};

export const signUp = () => {
  return (dispatch, getState) => {
    dispatch({type: SIGN_OUT, user: ''});
  }
};
