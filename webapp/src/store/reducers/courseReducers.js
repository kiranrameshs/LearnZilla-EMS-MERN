import courseState from '../state';
import {CREATE_COURSE} from '../actions/action-types';

const initialState = courseState;

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        ...state,
        courses: [action.payload, ...state.courses]
      };



    default:
      return state;
  }
}
