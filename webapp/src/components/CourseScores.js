import React, { Component } from 'react';


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
         {homeWorks.map( (c) => {
             let viewID = c.id + "-view";
             return <> <div className="courseFinalGrade">
             <h2>{c.title}</h2>
             <span className="finalGrade">{c.FinalGrade}</span>
             <span className="viewCourseScores" id={c.id} onClick={this.handleClick}>View More..</span>
            </div> <br /></>
         })}
           
          </>
        );
      }

}

export default CourseScores;