import React from 'react'
import NavBar from './NavBar'
//import Sidebar from './SideBar';
import CourseContainer from './CourseContainer'
//import './../styles/Modules/CourseCards.scss'
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;

import Sidebar from './SideBar/SideBar'
import './SideBar/SideBar.scss'

import { connect } from 'react-redux';
import { getCoursesDetails } from './../store/actions/grade.action';


class Dashboard extends React.Component {

  constructor(props){
    super(props);
    //should replace this hardcoded with a fetch API
    this.state = {
        User: "User1",
        role: "Teacher",
        Courses: [
          {
            id:1,
            title: "Web Design",
            FinalGrade: "A"
          }
          ,
          {
              id:2,
              title: "Cloud Computing",
              FinalGrade: "A-"
          }]
    }
}

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
            <NavBar/>
            {/* <div className={`gridOf${getCourseArray.length}`}> */}

            <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar />
              </Navbar.Collapse>
            </Navbar>
            <div className="gridOf4">
              <CourseContainer className="gridOf4" getCourseArray={getCourseArray} openCourseDetails={this.openCourseDetails} />
            </div>


            </>
        )
    }

}

export default Dashboard
