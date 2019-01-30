import authReducer from './authReducer'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'
import commentReducer from './commentReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  user: authReducer,
  article: articleReducer,
  category: categoryReducer,
  comment: commentReducer
})

export default rootReducer;
