import authReducer from './authReducer'
import articleReducer from './articleReducer'
import categoryReducer from './categoryReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  article: articleReducer,
  category: categoryReducer
})

export default rootReducer;
