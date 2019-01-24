import {ADD_ARTICLE, DELETE_ARTICLE} from '../actions/types'

const init_state = {
  hasErrored:  false,
  isLoading: true,
  article: '',
  articles: ''
}

const articleReducer = (state = init_state, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: state.articles.concat(action.article)}
    case 'ADD_ARTICLE_ERROR':
      return state
    case "GET_ARTICLES":
      return {...state, articles:  action.articles, isLoading: false}
    case 'GET_ARTICLE':
      return {...state, article: action.article};
    case DELETE_ARTICLE:
      return Object.assign({}, state, {
         articles: [...state.articles.filter(article => article.id !== action.id)],
       });
    case 'CLEAR_STORE':
      return {...state, ...init_state};
    default:
      return state
  }
}

export default articleReducer;
