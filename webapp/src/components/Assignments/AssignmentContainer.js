import React, { Component } from 'react'
import NavBar from '../NavBar';
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';
import { connect } from 'react-redux';
import { getCourseAssigns } from '../../store/actions/grade.action';
import { getCoursesGrades } from '../../store/actions/grade.action';
import '../../styles/Modules/AssignmentContainer.scss';

//import { Route, Switch, Redirect } from 'react-router';

import { withRouter,useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

class AssignmentContainer extends Component {

    constructor(props){
        super(props);
        console.log("ts")
        console.log(props.location.aboutProps.assignment)
        // this.state= {
        //   assignmentID : props.location.aboutProps.assignment
        // }


        // console.log(this.props)

        // console.log(props.location.aboutprops.CourseID.c)
        // this.state = {
        //     data: props.location.aboutprops.course
        // }

    }


    componentDidMount() {

      let assigns =  this.props.location.aboutProps.assignment
        // let assigns = ["5fd97f752e2da92eb49db7f4","5fd9972ba4f11ed95cc1c108"]//this.props.courseAssigns;
        assigns.map((aID)=>{
          this.props.getCourseAssigns(aID);
        });
        
      }
    
    render() {
        // const c = this.props.c
        // console.log(this.state.assignmentID)

    let data ={};
    data.categories = this.props.courseAssignScores.filter(x=>x.id != "").map( (x)=>{ return x.assignmentname});

        return (
            <>
            <NavBar />
            <Navbar className="sidebar">
                  <Navbar.Collapse>
                    <Sidebar />
                  </Navbar.Collapse>
            </Navbar>
            <div className="formclass">
               <h2>Assignments</h2>
               <p>{data.categories}</p> 
               
            </div>
            </>
        )
    }
}

const reduxProps = state => {
    return ({
      courseAssignScores: state.grades.CourseAssigns, //getAvailableCourseAssigns(state) 
      grades: state.grades.coursesGrades 

    })
  };

export default connect(reduxProps, { getCoursesGrades, getCourseAssigns })(AssignmentContainer);
