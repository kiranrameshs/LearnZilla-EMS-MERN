import React from 'react'
import NavBar from './NavBar'
//import Sidebar from './SideBar';
import CourseContainer from './CourseContainer'
import './../styles/Modules/CourseCards.scss'
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
// import './styles/CourseCards.scss'
import Sidebar from './SideBar/SideBar';
import './SideBar/SideBar.scss';
import { connect } from 'react-redux';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { getMyCourses } from './../store/actions/course.action';



const reduxProps = state => {
    return ({
      courses: state.course.courseState      
      }
    )
  };


class Dashboard extends React.Component {

  constructor(props){
    super(props);
    let userState = JSON.parse(localStorage.getItem("user"));
    let id = userState._id;
    console.log("userId is " + id)
    let role = userState.role;
    let URL;
    if(role==="Teacher"){
      URL = "/teachers/users/"
    } else if(role==="Student"){
      URL = "/students/users/"
    }

  let roleID;
    fetch(URL+id, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => res.json())
      .then((responseJson) => {
          console.log("Role id is " + responseJson.message[0].id);
          roleID =  (responseJson.message[0].id);
          if (localStorage.getItem("roleid") === null) {
            localStorage.setItem("roleid", (roleID));
          }
          if(role==="Student"){this.props.getMyCourses(roleID);}
          

      })
      .catch(err => alert(err)
      );
    
    
  }
  
  componentDidMount() {

    }

    openCourse=(c)=>{
      console.log(c)
    }

    render(){
    
      let courses = this.props.courses.courses!==undefined? this.props.courses.courses: this.props.courses
      
      const courseList = courses.map((c, i ) =>{
        return (
          <CourseContainer key={i} courseID={c} openCourse={this.openCourse}>
          </CourseContainer>
          )});
        
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
export default connect(reduxProps, {getMyCourses})(Dashboard);
