import React, { Component } from 'react'

class AssignmentContainer extends Component {

    constructor(props){
        super(props);
        // console.log(props.location.aboutprops.CourseID.c)
        this.state = {
            data: props.location.aboutprops.CourseID
        }

    }


    
    render() {
        // const c = this.props.c
        return (
            <div>
               AssignmentContainer  + " " + {this.state.data.c}
            </div>
        )
    }
}


export default AssignmentContainer
