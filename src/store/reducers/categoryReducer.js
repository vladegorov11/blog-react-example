import {GET_CATEGORIES, GET_CATEGORIES_ERROR} from '../actions/types'


const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {...state, categories: action.categories};
    default:
      return state
  }
}

export default categoryReducer;
