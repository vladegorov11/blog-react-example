import {GET_COMMENTS} from '../actions/types'


const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return {...state, comments: action.comments};
    default:
      return state
  }
}

export default commentReducer;
