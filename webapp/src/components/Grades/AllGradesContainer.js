import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseGrade from './AllGradesCard';
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';
import { connect } from 'react-redux';
import { getCoursesGrades } from '../../store/actions/grade.action';

class AllGradesContainer extends Component {

    componentDidMount() {
        this.props.getCoursesGrades();
    }

    render() {
        const courseGradeList = this.props.grades.map((c, i) => {
            return (
                <>
            <CourseGrade key={i} course={c}>
            </CourseGrade>
         </>
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
        <ul className="allChildren">
            {courseGradeList}
        </ul>
        </>
        );
    }

}

const reduxProps = state => {
    return ({
        grades: state.grades.coursesGrades 
    })
  };
  
  
export default connect(reduxProps, { getCoursesGrades })(AllGradesContainer);