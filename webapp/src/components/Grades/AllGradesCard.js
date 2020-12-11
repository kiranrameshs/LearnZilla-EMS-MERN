import React, { Component } from 'react';
import NavBar from '../NavBar';

class CourseGrade extends Component {

    constructor(props){
        super(props);
    }

    handleClick = (event) => {

      if (event.target.classList.contains('viewCourseScores')) {
        const itemKey = event.target.id;
        //navigate to course score component using id
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
          <h2>{c.title}</h2>
          <span className="finalGrade">{c.FinalGrade}</span>
          <span className="viewCourseScores" id={c.title + "-view"} onClick={this.handleClick}>View More..</span>
         </div> <br />
         </>
        );
      }

}

export default CourseGrade;