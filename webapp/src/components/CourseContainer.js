import React, { Component } from 'react'
import CourseCards from './CourseCards'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class CourseContainer extends Component {


    // constructor(props){
    //     super(props);
        
    // }

    render() {
        let c = this.props.courseID;

        return(
            <>
            <h2>
                <Link to= {{
                        pathname: "/courses/Assignments",
                        aboutprops: {
                            CourseID : {c}
                             }
                    }}>{c}</Link>
            </h2>
            </>
        )
      
    }
}

export default CourseContainer