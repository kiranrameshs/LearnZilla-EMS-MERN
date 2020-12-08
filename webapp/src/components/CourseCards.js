import React, { Component } from 'react'

class CourseCards extends Component {

    constructor(props){
        super(props);
    }
    render() {
    console.log("render1 ");

        return (
            <div>
                <button onClick = {this.props.openCourseDetails.bind(this)}> GetCourse  Details</button>
            </div>
        )
    }
}

export default CourseCards
