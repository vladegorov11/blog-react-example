import axios from 'axios'
import {GET_COMMENTS, API_URL} from './types'


export const getComments = (article) => {
  return (dispatch, getState) => {
      dispatch({type: GET_COMMENTS, comments: article});
  }
};
