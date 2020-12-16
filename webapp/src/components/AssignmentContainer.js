import React, { Component } from 'react'

class AssignmentContainer extends Component {

    constructor(props){
        super(props);
        // console.log(props.location.aboutprops.CourseID.c)

    }
    render() {
        const c = this.props.location.aboutprops.CourseID.c
        return (
            <div>
               AssignmentContainer  + " " + {c}
            </div>
        )
    }
}

// ocation:
// aboutprops:
// CourseID:
// c: "5fd395577cddf1516f6e5912"

export default AssignmentContainer
