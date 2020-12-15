import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseAssignScores from './CourseAssignScores';

import { getCourseAssigns } from '../../store/actions/grade.action';
import { Link } from 'react-router-dom';
//import { Route, Switch, Redirect } from 'react-router';
 import { withRouter,useHistory } from 'react-router-dom';
 import { connect } from 'react-redux';

class AllGradesCard extends Component {

    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    constructor(props) {
      super(props);
  
      console.log(this.props)
      this.handleClick = this.handleClick.bind(this);
  }
  

    // handleClick = (event) => {

    //   if (event.target.classList.contains('courseGradeCard')) {
    //     const itemKey = event.target.id;
    //     this.props.history.push('/HW-scores');
    //     //navigate to CourseAssignScores component passing assignments as props
    //     //window.location = '/HW-scores';
    //     return (
    //       <CourseAssignScores courseAssigns={this.props.course.assignment}/>
    //    );


    //   }
    //     switch(event.target.id){
    //         default:
    //         break;
    //     }

    // }

    handleClick(name){
      this.props.history.push({
        pathname: name,
        state: { courseAssigns: this.props.course.assignment }
      })
    }



      render() {
          let c = this.props.course;
          console.log("c is "+c);
          console.log("props is "+this.props);
          let perClass = "c100 p25 ";
          if(c.coursefinalscrore > 90)
            perClass += "dark green";
          else if(c.coursefinalscrore < 80)
          perClass += "dark orange";
          
        return (
          <> <div  onClick={(e) => this.handleClick('/HW-scores', e)} className="courseGradeCard ">
            <div className="courseHeading">{c.coursename}</div>
            <br />
            <div className={perClass}>
             <span>{c.coursefinalscrore}</span>
             <div class="slice">
                 <div class="bar"></div>
                 <div class="fill"></div>
             </div>
         </div>
         
          {/* <span class="finalGrade">{c.coursefinalscrore}%</span> */}
          {/* <button className=" btn btn-primary btn-xs viewCourseScores" id={c.id + "-view"} onClick={this.handleClick}>View More</button> */}
         </div> <br />
           {/* </Link> */}
         
         </>
        );
      }

}

//export default AllGradesCard;

const reduxProps = state => {
  // return ({
  //     //grades: state.grades.coursesGrades
  // })
};


export default connect(reduxProps, { getCourseAssigns })(AllGradesCard);
