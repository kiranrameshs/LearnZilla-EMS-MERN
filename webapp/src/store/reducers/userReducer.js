import userState from '../state';
import {REGISTER_USER, LOGIN_USER, LOGOUT_USER} from '../actions/action-types';

const initialState = userState;

export default function(state = initialState, action) {
  switch (action.type) {

    case REGISTER_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        user: action.payload
      };

    case LOGIN_USER:
      return {
        ...state,
        authUser: action.payload
      };

    case LOGOUT_USER:
      return {
        ...state,
        authUser: {}
      };
      
    default:
      return state;
  }
}
