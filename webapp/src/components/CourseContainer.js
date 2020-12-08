import React, { Component } from 'react'
import CourseCards from './CourseCards'

class CourseContainer extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
    console.log("render ");

        return this.props.getCourseArray.map((course)=>{
            console.log(course.title);
            <CourseCards key={course}
            course = {course}
            openCourseDetails={this.props.openCourseDetails} />
            console.log(course.FinalGrade);

        })
    }
}

export default CourseContainer