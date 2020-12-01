import React, { Component } from 'react'
import CourseItem from './CourseItem'

class CourseContainer extends Component {

    constructor(props){
        super(props);
    }
    getCourseArray =(studentId) =>{
        // request a fetch get from the api based on studentID and returns an array of CoureList
        // writing a dummy return statement for now
        const courses =[studentId, "course1", "course2"];
        return courses;
    };

    render() {
        return this.getCourseArray(this.props.studentID).map((courseItem) => (
            <CourseItem 
            key={courseItem}
            openCourseDetails = {this.props.openCourseDetails}
            
            />
        )
            
        )
    }
}

export default CourseContainer
