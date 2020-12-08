import React, { Component } from 'react';
import NavBar from './NavBar';

class AllCourseGrades extends Component {

    constructor(props){
        super();
        this.state = {
            User: "User1",
            Role: "Student",
            Courses: [
              {
                id:1,
                title: "Web Design",
                FinalGrade: "A"
              },
              {
                  id:2,
                  title: "Cloud Computing",
                  FinalGrade: "A-"
              }]
        }
    }

    componentDidMount() {
       //Fetch Courses of User with Final Grade
        // fetch('/todos/', { method: 'GET' })
      // .then(res => res.json())
      // .then(json => {
      //  console.log(json);
        
      // });
       this.setState({
           courses: []
       })
       //Student
       //TA or Teacher
      }

    handleClick = (event) => {

      if (event.target.classList.contains('viewCourseScores')) {
        const itemKey = event.target.id;
        //navigate to course score component using id
      }
        switch(event.target.id){
            default:
            break;
        }
 
    }



      render() {
          let courses = this.state.Courses;
        return (
          <>
          <NavBar />
         {courses.map( (c) => {
             let viewID = c.id + "-view";
             return <> <div className="courseFinalGrade">
             <h2>{c.title}</h2>
             <span className="finalGrade">{c.FinalGrade}</span>
             <span className="viewCourseScores" id={c.id} onClick={this.handleClick}>View More..</span>
            </div> <br /></>
         })}
           
          </>
        );
      }

}

export default AllCourseGrades;