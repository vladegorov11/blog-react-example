import {SIGN_IN, SIGN_IN_ERROR, SIGN_OUT, SIGN_UP, SIGN_UP_ERROR, API_URL} from './types'
import axios from 'axios'

export const signIn = (user, history) => {
  return (dispatch, getState) => {
    axios.post(API_URL + 'users/login', {
        user: user
    })
    .then(function (response) {
      history.push('/')
      dispatch({type: SIGN_IN, user: response.data.data.user});
    })
    .catch(function (error) {
      dispatch({type: SIGN_IN_ERROR, error: error.error});
    });
  }
};

export const signUp = (user, history) => {
  return (dispatch, getState) => {
    axios.post(API_URL + 'users', {
        user: user
    })
    .then(function (response) {
      history.push('/')
      dispatch({type: SIGN_UP, user: response.data.data.user});
    })
    .catch(function (error) {
      dispatch({type: SIGN_UP_ERROR, user: error.error});
    });
  }
};

export const signOut = () => {
  return (dispatch, getState) => {
    dispatch({type: SIGN_OUT, user: ''});
  }
};
