import * as ActionTypes from './action-types';

export const createAssignment = (assignmentData, assignmentid) => dispatch => {
  let createAssignmentUrl = '/assignments';
  fetch(createAssignmentUrl, {
    method: 'POST',
    body: JSON.stringify({
      'assignmentname': assignmentData.assignmentname,
      'assignmentdescription': assignmentData.assignmentdescription,
      'assignmentstartdate': assignmentData.assignmentstartdate,
      'assignmentenddate': assignmentData.assignmentenddate,
      'assignmentscrore': assignmentData.assignmentscrore
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((responseJson) => {
    if (responseJson.status >= 200 && responseJson.status < 300) {
      assignmentid = responseJson.assignment;
      dispatch({ type: ActionTypes.CREATE_ASSIGNMENT, payload: responseJson.assignment})
    } else {
      //alert(responseJson);
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
