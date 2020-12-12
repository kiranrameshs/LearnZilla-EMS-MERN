import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';

import { connect } from 'react-redux';
import { getCourseAssigns } from '../../store/actions/grade.action';
//import { getAvailableCourseAssigns } from '../../store/selectors/grade.selectors';

class CourseAssignScores extends Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {
    let assigns = ["5fd3b55b14fb9961d1b2857d","5fd3e6120706e37d3720cbdf"]//this.props.courseAssigns;
    assigns.map((aID)=>{
      this.props.getCourseAssigns(aID);

    });
    
  }

  render() {
    let homeWorks = this.props.courseAssignScores;//   bordered
    return (
      <>
        <NavBar />
        <>
          <Table responsive striped condensed >
            <thead>
              <tr>
                <th> </th>
                <th> Home Work </th>
                <th> Submitted On </th>
                <th> Score  </th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {homeWorks.map((c) => {
                return <tr>
                  <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                  <td> {c.assignmentname}</td>
                  <td> {c.assignmentenddate}</td>
                  <td> {c.assignmentscrore}</td>
                  <td> <Button data-toggle="tooltip" data-placement="bottom" title="See FeedBack"> View Feedback</Button> <Button> Add Sticky</Button></td>
                </tr>

              })}
            </tbody>
          </Table></>


      </>
    );
  }

}

const reduxProps = state => {
  return ({
    courseAssignScores: state.grades.CourseAssigns //getAvailableCourseAssigns(state) 
  })
};

export default connect(reduxProps, { getCourseAssigns })(CourseAssignScores);