import {SIGN_IN, SIGN_IN_ERROR, SIGN_OUT, SIGN_UP, SIGN_UP_ERROR, API_URL} from '../actions/types'
import {getUser, setUser, logOut} from '../../helpers/authHelper'

function findUserInStorage() {
  let user = getUser();
  if  (user){
    return user
  }else {
    return null
  }
}

const initState = {
  user: findUserInStorage()
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGN_UP:
      console.log(action.user);
      setUser(action.user);
      return {...state, user: action.user};
    case SIGN_IN:
      setUser(action.user)
      return {...state, user: action.user};
    case SIGN_OUT:
      logOut();
      return {...state, user: null};
    default:
      return state
  }
}

export default authReducer;
