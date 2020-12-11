import allGradesState from '../state/allGrades';
import {GET_COURSE_GRADES} from '../actions/action-types';
import {GET_COURSE_HW_GRADES} from '../actions/action-types';
import {ACTIONS} from '../actions/action-types';

const initialState = allGradesState;

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_GRADES:
      return {
        ...state,
        coursesGrades: action.payload
      };
    case GET_COURSE_HW_GRADES:
      return {
        ...state,
        CourseHWs: action.payload
      };


    default:
      return state;
  }
}
