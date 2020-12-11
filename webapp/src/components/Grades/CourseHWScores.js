import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';

import { connect } from 'react-redux';
import { getCourseHWs } from '../../store/actions/grade.action';

class CourseHWScores extends Component {

  componentDidMount() {
    this.props.getCourseHWs();
  }

  render() {
    let homeWorks = this.props.courseHW;//   bordered
    return (
      <>
        <NavBar />
        <>
          <Table responsive striped condensed hover>
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
                  <td> {c.title}</td>
                  <td> {c.submittedOn}</td>
                  <td> {c.score}</td>
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
    courseHW: state.grades.CourseHWs
  })
};


export default connect(reduxProps, { getCourseHWs })(CourseHWScores);