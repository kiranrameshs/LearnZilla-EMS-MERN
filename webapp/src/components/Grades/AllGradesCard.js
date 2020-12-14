import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseAssignScores from './CourseAssignScores';

import { connect } from 'react-redux';
import { getCourseAssigns } from '../../store/actions/grade.action';

const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class AllGradesCard extends Component {

    constructor(props){
        super(props);
    }

    handleClick = (event) => {

      if (event.target.classList.contains('viewCourseScores')) {
        const itemKey = event.target.id;

        //navigate to CourseAssignScores component passing assignments as props
        //window.location = '/HW-scores';
        return (
           <CourseAssignScores courseAssigns={this.props.course.assignment}/>
        );


      }
        switch(event.target.id){
            default:
            break;
        }

    }



      render() {
          let c = this.props.course;
        return (
          <> <div className="courseFinalGrade">
          <h2>{c.coursename}</h2>
          <span className="finalGrade">{c.coursefinalscrore}</span>
          <span className="viewCourseScores" id={c.id + "-view"} onClick={this.handleClick}>View More..</span>
         </div> <br />
         </>
        );
      }

}

//export default AllGradesCard;

// const reduxProps = state => {
//   return ({
//       //grades: state.grades.coursesGrades
//   })
// };


export default connect(reduxProps, { getCourseAssigns })(AllGradesCard);
