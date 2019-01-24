import {GET_CATEGORIES, GET_CATEGORIES_ERROR, API_URL} from './types'
import axios from 'axios'

export const getCategories = () => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'categories')
    .then(function (response) {
      dispatch({type: GET_CATEGORIES, categories: response.data.data.categories});
    })
    .catch(function (error) {
      dispatch({type: GET_CATEGORIES_ERROR, error: error.error});
    });
  }
};
