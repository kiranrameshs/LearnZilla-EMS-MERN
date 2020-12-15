import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseAssignScores from './CourseAssignScores';

import { getCourseAssigns } from '../../store/actions/grade.action';
import { Link } from 'react-router-dom';
//import { Route, Switch, Redirect } from 'react-router';
 import { withRouter,useHistory } from 'react-router-dom';
 import { connect } from 'react-redux';

class AllGradesCard extends Component {

    constructor(props){
        super(props);
    }

    handleClick = (event) => {

      if (event.target.classList.contains('courseGradeCard')) {
        const itemKey = event.target.id;
        // const { history } = this.props;
        // history.push("/AssignScores")

        //navigate to CourseAssignScores component passing assignments as props
        return (
          <div></div>// <Redirect to="/AssignScores"/>
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
          <> 
          {/* <Link to={`/AAssignScores/${c._id}`}> */}
          <div onClick={this.handleClick} className="courseGradeCard ">
            <div className="courseHeading">{c.coursename}</div>
          <span class="finalGrade">{c.coursefinalscrore}%</span>
          {/* <button className=" btn btn-primary btn-xs viewCourseScores" id={c.id + "-view"} onClick={this.handleClick}>View More</button> */}
         </div> <br />
           {/* </Link> */}
         
         </>
        );
      }

}

//export default AllGradesCard;

const reduxProps = state => {
  return ({
      //grades: state.grades.coursesGrades 
  })
};


export default connect(reduxProps, { getCourseAssigns,withRouter })(AllGradesCard);