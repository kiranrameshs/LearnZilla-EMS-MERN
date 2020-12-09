import userState from '../state';
import {GET_COURSE_GRADES} from '../actions/action-types';

const initialState = userState;

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_GRADES:
      return {
        ...state,
        coursesGrades: action.payload
      };

    default:
      return state;
  }
}
