import React, { Component } from 'react'
import CourseCards from './CourseCards'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class CourseContainer extends Component {


    constructor(props){
        super(props);
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


    handleClick(name){
        // alert(this.props)
        // this.props.history.push({
        //   pathname: name,
        //   state: { courseAssigns: this.props.course.assignment }
        // })
      }

    render() {
        let c = this.props.course;

        return(
            <>
            <h2 onClick={this.handleClick.bind(this)}> {c.coursename}
                {/* <Link to= {{
                        pathname: "/courses/Assignments",
                        aboutprops: {
                            key : c.id,
                            course : c.coursename
                             }
                    }}>{c}</Link> */}
            </h2>
            </>
        )
      
    }
}

export default CourseContainer