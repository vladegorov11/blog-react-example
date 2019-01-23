import axios from 'axios'
import {GET_COMMENTS} from './types'
const url = 'http://localhost:3001/api/v1/'

export const getComments = (article) => {
  return (dispatch, getState) => {
      dispatch({type: GET_COMMENTS, comments: article});
  }
};
