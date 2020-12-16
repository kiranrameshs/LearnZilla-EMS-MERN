import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseGrade from './AllGradesCard';
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';
import { connect } from 'react-redux';
import { getCoursesGrades } from '../../store/actions/grade.action';
import { getMyCourses } from '../../store/actions/course.action';

class AllGradesContainer extends Component {

    constructor(props){
        super(props);


    }
    componentDidMount() {
        this.props.getCoursesGrades(localStorage.getItem("roleid"));
    }


    render() {
        let courses = this.props.grades;
        let courseGradeList = <div></div>;
        if(courses.length !== 0){
             courseGradeList = courses[0].map((c, i) => {
                return (
                    <>
                <CourseGrade key={i} course={c}>
                </CourseGrade>
             </>
                )
            });
        }
        
        return (
        <> 
        <NavBar />
        <Navbar className="sidebar">
              <Navbar.Collapse>
                <Sidebar />
              </Navbar.Collapse>
        </Navbar>
       
        <ul className="allChildren">
            {courseGradeList }
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
  
  
export default connect(reduxProps, { getCoursesGrades,getMyCourses })(AllGradesContainer);