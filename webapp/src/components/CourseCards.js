import React, { Component } from 'react'

class CourseCards extends Component {

    constructor(props){
        super(props);
    }

    render() {
    console.log(this.props.course.title);

        return (
            <div>
                <button onClick={this.props.openCourseDetails.bind(this)}> Get Course  Details</button>
            </div>
        )
    }
}

export default CourseCards
