import courseState from '../state';
import {CREATE_COURSE} from '../actions/action-types';

const initialState = courseState;

export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      console.log(action.payload);
      return {
        ...state,
        courses: action.payload
        //courses: [...state.courses, action.payload]
      };

    default:
      return state;
  }
}
