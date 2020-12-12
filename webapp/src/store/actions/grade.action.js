import * as ActionTypes from './action-types';

// export const GET_COURSE_DEATILS;
export const getCoursesDetails = () => dispatch => {

  let coursesGrades_URL = '/courses';
  fetch(coursesGrades_URL, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((responseJson) => {
     dispatch({ type: ActionTypes.GET_COURSE_DETAILS, 
      payload: responseJson})
  })
  .catch(err =>
    dispatch({
      type: ActionTypes.ERRORS,
      payload: err.responseJson
    })
  );
};

export const getCoursesGrades = () => dispatch => {

    let coursesGrades_URL = '/courses';
    fetch(coursesGrades_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then((responseJson) => {
       dispatch({ type: ActionTypes.GET_COURSE_GRADES, payload: responseJson})
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.ERRORS,
        payload: err.responseJson
      })
    );


  };

export const getCourseAssigns = (assignID) => dispatch => {

    let coursesGrades_URL = '/assignments/' + assignID;
    fetch(coursesGrades_URL, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then((responseJson) => {
      dispatch({ type: ActionTypes.GET_COURSE_ASSIGN_GRADES, payload: responseJson})
    })
    .catch(err =>
      dispatch({
        type: ActionTypes.ERRORS,
        payload: err.rresponseJson
      })
    );
  };
  