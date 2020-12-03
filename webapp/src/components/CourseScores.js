import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from './NavBar';

class CourseScores extends Component {

    constructor(props){
        super();
        this.state = {
          User: "User1",
          Role: "Student",
          CourseHWs: [
            {
              Title:"ReactJS Demo",
              Score: 95,
              SubmittedOn: "23/4/2020",
              Feedback: "Avs khkn kjsain er jdvhzl fas"
            },
            {
              Title:"Redux Demo",
              Score: 87,
              SubmittedOn: "10/34/2020",
              Feedback: "Kijbjv gkcmxz fg kkv afd kblfbf."
            }]
      }
    }

    componentDidMount() {
     //fetch API to get all scores of a course
      }

      render() {
        let homeWorks = this.state.CourseHWs;
        return (
          <>
            <NavBar />
            <>
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th> </th>
                    <th> Home Work </th>
                    <th> Submitted On </th>
                    <th> Score  </th>
                    <th> Feedback</th>
                  </tr>
                </thead>
                <tbody>
                  {homeWorks.map((c) => {
                   return <tr>
                      <td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
                            <td> {c.Title}</td>
                            <td> {c.SubmittedOn}</td>
                            <td> {c.Score}</td>
                            <td> {c.Feedback}</td>
                    </tr>

                  })}
                </tbody>
              </Table></>


          </>
        );
      }

}

export default CourseScores;