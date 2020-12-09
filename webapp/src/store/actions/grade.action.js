import * as ActionTypes from './action-types';

export const getCoursesGrades = () => dispatch => {
    let tempJSON = [
        {  title: "Web Design", FinalGrade: "A" },
        {  title: "Cloud Computing", FinalGrade: "A-" },
        {  title: "Web Tools", FinalGrade: "B+" }
    ]
    dispatch({ type: ActionTypes.GET_COURSE_GRADES, payload: tempJSON})

    // let coursesGrades_URL = '/courses/grades/';
    // fetch(coursesGrades_URL, {
    //   method: 'GET',
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // .then(res => res.json())
    // .then((responseJson) => {
    //    // dispatch here
    // })
    // .catch(err =>
    //   dispatch({
    //     type: ActionTypes.ERRORS,
    //     payload: err.response.data
    //   })
    // );


  };
  