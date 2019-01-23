import axios from 'axios'
import {ADD_ARTICLE, GET_ARTICLE, GET_ARTICLE_ERROR,
        ADD_ARTICLE_ERROR, GET_ARTICLES, GET_ARTICLES_ERROR,
        CLEAR_STORE, DELETE_ARTICLE_ERROR, DELETE_ARTICLE} from './types'
const url = 'http://localhost:3001/api/v1/'

export const createArticle = (article) => {
  return (dispatch, getState) => {
    let formData = new FormData();
    formData.append('article[image]', article.image);
    formData.append('article[content]', article.content);
    formData.append('article[title]', article.title);
    axios({
      url: url + 'articles',
      method: 'POST',
      data: formData
    }).then(function (response) {
      dispatch({type: ADD_ARTICLE, article: response.data.data.article});
    })
    .catch(function (error) {
      dispatch({type: ADD_ARTICLE_ERROR, error: error});
    });
  }
};

export const getArticle = (id) => {
  return (dispatch, getState) => {
    axios.get(url + 'articles/' + id)
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
    axios.get(url + 'articles')
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
    console.log(clearStore);
    dispatch({type: CLEAR_STORE, article: clearParams});
  }
}


export const deleteArticle = (id) => {
  return (dispatch, getState) => {
    axios.delete(url + 'articles/' + id)
    .then(function (response) {
      dispatch({type: DELETE_ARTICLE, articles: response.data.data.articles});
    })
    .catch(function (error) {
      dispatch({type: DELETE_ARTICLE_ERROR, error: error});
    });
  }
};
