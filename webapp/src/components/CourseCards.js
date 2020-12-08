import React, { Component } from 'react'
import './../styles/Modules/CourseCards.scss'

class CourseCards extends Component {

    // constructor(props){
    //     super(props);
    // }

    render() {
        const course = this.props.course;
    // console.log(this.props.course.title);

        return (
            
                <div className={`col${course.id} card`} onClick={this.props.openCourseDetails.bind(this, course)}> {course.title}</div>

        )
    }
}

export default CourseCards
