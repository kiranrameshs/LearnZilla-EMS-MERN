<<<<<<< HEAD
import "./App.css";
import React, { Component } from "react";
import Dashboard from "./Dashboard";

// My app component
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      student:{
        id:'123',
        usernmae:'user'
      }
    }
  }

  render() {
    const studentID = this.state.student.id;
    return (
      <>
        <Dashboard studentID = {studentID}/>
      </>
    );
  }
}
=======
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './NavBar';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import AllCourseGrades from './AllCoursesGrades';
import CourseScores from './CourseScores';

// const App = () => (
//   <>
//     <NavBar />
//   </>
// );
>>>>>>> 71fb45aa6daca93b20c55f80416b2beff0f8138e

class App extends Component {

  render() {
    return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    </div>

  )
  }
}
export default App;
