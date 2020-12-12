import {
  ADD_COURSE,
  GET_COURSES,
  GET_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
  ERRORS
} from './action-types';
import axios from 'axios';


/** Action function to add course  */
export const addCourse = courseData => dispatch => {
  axios.post('/api/course/', courseData)
    .then(res =>
      dispatch({
        type: ADD_COURSE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ERRORS,
        payload: err.response.data
      })
    );
};
