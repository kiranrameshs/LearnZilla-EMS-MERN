import courseState from '../state';
import {CREATE_COURSE} from '../actions/action-types';

const initialState = courseState;

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
     console.log(action);
      return {
        ...state,
        courses: [...state.courses, action.payload],
        course: action.payload
      };

    default:
      return state;
  }
}
