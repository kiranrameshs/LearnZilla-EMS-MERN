import React, { Component } from 'react'

class CourseItem extends Component {
    render() {
        return (
            <div>
                <button onClick = {this.props.openCourseDetails.bind(this)}> GetCourse  Details</button>

            </div>
        )
    }
}

export default CourseItem
