import axios from 'axios'
import {ADD_ARTICLE, GET_ARTICLE, GET_ARTICLE_ERROR,
        ADD_ARTICLE_ERROR, GET_ARTICLES, GET_ARTICLES_ERROR,
        CLEAR_STORE, DELETE_ARTICLE_ERROR, DELETE_ARTICLE, API_URL} from './types'
import {getUser} from '../../helpers/authHelper'

export const createArticle = (article, history) => {
  return (dispatch, getState) => {
    let formData = new FormData();
    formData.append('article[image]', article.image);
    formData.append('article[content]', article.content);
    formData.append('article[title]', article.title);
    formData.append('article[category_id]', article.category);
    axios({
      url: API_URL + 'articles',
      method: 'POST',
      data: formData,
      headers: {
        'Authorization': 'Token token=' + getUser().token
      },
    }).then(function (response) {
      history.push(`/article/${response.data.data.article.id}`)
      dispatch({type: ADD_ARTICLE, article: response.data.data.article});
    })
    .catch(function (error) {
      dispatch({type: ADD_ARTICLE_ERROR, error: error});
    });
  }
};

export const getArticle = (id) => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'articles/' + id)
    .then(function (response) {
      dispatch({type: GET_ARTICLE, article: response.data.data.articles});
    })
    .catch(function (error) {
      dispatch({type: GET_ARTICLE_ERROR, error: error});
    });
  }
};

export const getArticles = () => {
  return (dispatch, getState) => {
    axios.get(API_URL + 'articles')
    .then(function (response) {
      dispatch({type: GET_ARTICLES, articles: response.data.data.articles});
    })
    .catch(function (error) {
      dispatch({type: GET_ARTICLES_ERROR, error: error});
    });
  }
};

export const clearStore = (clearParams) =>  {
  return (dispatch, getState) => {
    dispatch({type: CLEAR_STORE, article: clearParams});
  }
}


export const deleteArticle = (id) => {
  return (dispatch, getState) => {
    axios.delete(API_URL + 'articles/' + id)
    .then(function (response) {
      dispatch({type: DELETE_ARTICLE, id: id });
    })
    .catch(function (error) {
      dispatch({type: DELETE_ARTICLE_ERROR, error: error});
    });
  }
};
