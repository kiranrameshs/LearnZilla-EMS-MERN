import React, { Component } from 'react'
import CourseCards from './CourseCards'
import { connect } from 'react-redux';

class CourseContainer extends Component {


    constructor(props){
        super(props);
    }



    render() {
        let c = this.props.course;

        return(
            <>
            <h2>{c.coursename}</h2>
            </>
        )
      
    }
}

export default CourseContainer