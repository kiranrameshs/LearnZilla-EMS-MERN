import React, { Component } from 'react'
import CourseCards from './CourseCards'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AssignmentContainer from './Assignments/AssignmentContainer';


class CourseContainer extends Component {


    constructor(props){
        super(props);
        this.state={
            assignmentID: []
        }
        // this.handleClick = this.handleClick.bind(this);
    //     let courseID= props.courseID

    //     // /:studentid/:courseid/assignments

    //     let userState = JSON.parse(localStorage.getItem("user"));
    //     let id = userState._id;
    //     let role=userState.role
    //     console.log("userId is " + id)
    //     let roleid= (localStorage.getItem("roleid"));


    //     if(role==="Teacher"){
         
    //     } 
    //     else if(role==="Student"){
    //       URL = "/"+roleid+"/"+courseID+"/assignments"
    //       console.log(URL)
        
    //     fetch(URL, {
    //         method: 'GET',
    //         headers: {
    //           "Content-Type": "application/json"
    //         }
    //       })
    //       .then(res => res.json())
    //       .then((responseJson) => {
    //           console.log(responseJson)
    //         //  return (responseJson.message[0].id);
    //       })
    //       .catch(err => alert(err)
    //       );
    // }
          
    }

componentDidMount(){
    this.setState({
        assignmentID: ["5fd97f752e2da92eb49db7f4"]
    })
}
    handleClick(name){
        alert("clicked")
        // this.props.history.push({
        //   pathname: name,
        //   state: { courseAssigns: this.props.course.assignment }
        // })
      }

    render() {
        let c = this.props.course;      
        let courseAssignments = c.assignment;
        // let courseAssignmentList = <div></div>;
        // if(courseAssignments.length !== 0){
        //     courseAssignmentList = courseAssignments.map((a, i) => {
        //         return (
        //             <>
        //             <AssignmentContainer key={i} assignment={a}>
        //             </AssignmentContainer>
        //          </>
        //         )
        //     });
        // }

        // if(courseAssignments.length !== 0){
        //     courseAssignmentList = courseAssignments.map((a, i) => {
        //         return (
        //             <>
        //             <AssignmentContainer key={i} assignment={a}>
        //             </AssignmentContainer>
        //          </>
        //         )
        //     });
        // }

        return(
            //handleClick = (event) => {
            <>
                <Link to= {{
                        pathname: "/courses/Assignments",
                        aboutProps: {
                            key : c.id,
                            assignment : c.assignment
                             }
                    }}><div>
            <h2> {c.coursename}</h2>
            <p>{c.coursedesc}</p></div></Link>
            
            </>
        )
      
    }
}

                {/* <Link to= {{
                        pathname: "/courses/Assignments",
                        aboutprops: {
                            key : c.id,
                            course : c.coursename
                             }
                    }}>{c}</Link> */}
export default CourseContainer