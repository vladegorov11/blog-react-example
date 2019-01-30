import axios from 'axios'
import {GET_COMMENTS, API_URL} from './types'


export const getComments = (article) => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'articles/' + article.id + '/comments' )
    .then(function (response) {
      dispatch({type: GET_COMMENTS, comments: response.data.data.comments});
    })
    .catch(function (error) {
      console.log('commnts errors');
    });
  }
};
