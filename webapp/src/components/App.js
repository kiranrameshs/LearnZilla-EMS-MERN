import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import CreateCourses from './Courses/CreateCourses';
import AssignCourse from './Teachers/AssignCourse';
import CreateAssignments from './Assignments/CreateAssignments';
import AllGradesContainer from './Grades/AllGradesContainer';
import CourseAssignScores from './Grades/CourseAssignScores';
import Dashboard from './Dashboard';
import FeedBack from './Grades/AssignFeedback';
import GradeAnalytics from './Grades/GradeAnalytics';
import Profile from './Profile';
import SuccessPage from './SuccessPage/SuccessPage';

class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" key="login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/courses/create" component={CreateCourses} />
            <Route path="/teachers/edit" component={AssignCourse} />
            <Route path="/assignments/create" component={CreateAssignments} />
            <Route path="/home" component={NavBar} />
            <Route path="/grades" component={AllGradesContainer} />
            <Route path="/HW-scores" component={CourseAssignScores} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/analytics" component={GradeAnalytics} />
            <Route path="/profile" component={Profile} />

        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;
