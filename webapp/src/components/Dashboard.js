import React from 'react'
import NavBar from './NavBar'
//import Sidebar from './SideBar';
import CourseContainer from './CourseContainer'
import './../styles/Modules/CourseCards.scss'
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
// import './styles/CourseCards.scss'
import Sidebar from './SideBar/SideBar'
import './SideBar/SideBar.scss'

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
        <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar />
              </Navbar.Collapse>
        </Navbar>
        <h1>Dashboard</h1>
        <div className="gridOf4"> 
        <ul >
            {courseList}
        </ul>
        </div>
       
        </>
        );

  
    }

}
export default connect(reduxProps, { getCoursesDetails })(Dashboard);
