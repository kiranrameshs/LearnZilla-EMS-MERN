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


<<<<<<< HEAD
const reduxProps = state => {
    return ({
        courses: state.grades.courses
=======
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
>>>>>>> integration
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
<<<<<<< HEAD
        <> 
        <NavBar />
        <h1>Dashboard</h1>
        <ul>
            {courseList}
        </ul>
        </>
        );

        
=======
            <>
            <NavBar/>
            {/* <div className={`gridOf${getCourseArray.length}`}> */}

            <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar role={this.state.role} />
              </Navbar.Collapse>
            </Navbar>
            <div className="gridOf4">
              <CourseContainer className="gridOf4" getCourseArray={getCourseArray} openCourseDetails={this.openCourseDetails} />
            </div>


            </>
        )
>>>>>>> integration
    }

}
<<<<<<< HEAD
export default connect(reduxProps, { getCoursesDetails })(Dashboard);
=======

export default Dashboard
>>>>>>> integration
