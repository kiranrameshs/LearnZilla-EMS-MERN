import * as ActionTypes from './action-types';

export const createCourse = courseData => dispatch => {
  let createcourseUrl = '/courses/create/';
  fetch(createcourseUrl, {
    method: 'POST',
    body: JSON.stringify({
      'coursename': courseData.coursename,
      'coursedesc': courseData.coursedesc,
      'coursestartdate': courseData.coursestartdate,
      'courseenddate': courseData.courseenddate
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((responseJson) => {
    alert(responseJson.message);
    if (responseJson.status >= 200 && responseJson.status < 300) {
      dispatch({ type: ActionTypes.CREATE_COURSE, payload: responseJson})
    } else {
      dispatch({ type:ActionTypes.ERRORS, responseJson})
    }
  })
  .catch(err =>
    dispatch({
      type: ActionTypes.ERRORS,
      payload: err.response
    })
  );
};
