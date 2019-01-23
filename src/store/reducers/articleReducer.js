import {ADD_ARTICLE} from '../actions/types'

const init_state = {
  hasErrored:  false,
  isLoading: true,
  article: '',
  articles: ''
}

const articleReducer = (state = init_state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
     return state
    case 'ADD_ARTICLE_ERROR':
      return state
    case "GET_ARTICLES":
      return {...state, articles:  action.articles, isLoading: false}
    case 'GET_ARTICLE':
      return {...state, article: action.article};
    case 'CLEAR_STORE':
      return {...state, ...init_state};
    default:
      return state
  }
}

export default articleReducer;
