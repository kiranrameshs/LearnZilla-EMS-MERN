import React from 'react'
import NavBar from './NavBar'
import SidePanel from './SidePanel'
import CourseContainer from './CourseContainer'
import './../styles/Modules/CourseCards.scss'

import { connect } from 'react-redux';
import { getCoursesDetails } from './../store/actions/grade.action';


const reduxProps = state => {
    return ({
        courses: state.grades.courses
    }
    )
  };


class Dashboard extends React.Component {

    componentDidMount() {
        this.props.getCoursesDetails();
    }

    render(){


        const courseList = this.props.courses.map((c, i) => {
            return (
            <CourseContainer key={i} course={c}>
            </CourseContainer>
            )
        });
        return (
        <> 
        <NavBar />
        <h1>Dashboard</h1>
        <ul>
            {courseList}
        </ul>
        </>
        );

        
    }
    
}
export default connect(reduxProps, { getCoursesDetails })(Dashboard);
