import * as ActionTypes from './action-types';

export const getCoursesGrades = () => dispatch => {
    let tempJSON = [
        { id: "_1", title: "Web Design", FinalGrade: "A" },
        { id: "_2",  title: "Cloud Computing", FinalGrade: "A-" },
        {  id: "_3", title: "Web Tools", FinalGrade: "B+" }
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

export const getCourseHWs = () => dispatch => {
    let tempJSON = [
      {
        id: "_1",
        title:"ReactJS Demo",
        score: 95,
        submittedOn: "23/4/2020",
        feedback: "Avs khkn kjsain er jdvhzl fas"
      },
      {
        id: "_2",
        title:"Redux Demo",
        score: 87,
        submittedOn: "10/34/2020",
        feedback: "Kijbjv gkcmxz fg kkv afd kblfbf."
      }

    ]
    // {
    //     CourseHWs: [
    //       {
    //         id: "_1",
    //         title:"ReactJS Demo",
    //         score: 95,
    //         submittedOn: "23/4/2020",
    //         feedback: "Avs khkn kjsain er jdvhzl fas"
    //       },
    //       {
    //         id: "_2",
    //         title:"Redux Demo",
    //         score: 87,
    //         submittedOn: "10/34/2020",
    //         feedback: "Kijbjv gkcmxz fg kkv afd kblfbf."
    //       }
    //     ]
    // }
    dispatch({ type: ActionTypes.GET_COURSE_HW_GRADES, payload: tempJSON})

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
  