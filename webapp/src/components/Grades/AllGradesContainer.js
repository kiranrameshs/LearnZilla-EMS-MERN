import React, { Component } from 'react';
import NavBar from '../NavBar';
import CourseGrade from './CourseGrade';

import { connect } from 'react-redux';
import { getCoursesGrades } from '../../store/actions/grade.action';

// const mapStateToProps = (state) => {
//     return { allCourseGrades: state.user.gradesState }
// };

class AllGradesContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCoursesGrades();
    }

    render() {
        const courseGradeList = this.props.coursesGrades.map((c, i) => {
            return (
            <CourseGrade key={i} course={c}>
            </CourseGrade>
            )
        });
        return (
        <> 
        <NavBar />
        <ul>
            {courseGradeList}
        </ul>
        </>
        );
    }

}

// const allGradesRedux = connect(mapStateToProps)(AllGradesContainer);

// export default allGradesRedux;

const reduxProps = state => {
    return ({
        coursesGrades: state.user.gradesState
    })
  };
  
  
export default connect(reduxProps, { getCoursesGrades })(AllGradesContainer);