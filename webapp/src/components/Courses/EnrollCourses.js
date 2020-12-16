import React, {Component} from 'react';
// import './enrollCourses.scss';
import { Redirect } from "react-router-dom";
import { Table, Button } from 'react-bootstrap';

class EnrollCourses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      studentid: '',
      currentCourseList: [],
      allCourseList: [],
      newAllCourseList : [],
      allcourseLoaded: false,
      currentCourseLoaded: false,
      selectedIndexes: [],
      currentCourseListNames: [],
      additionSuccess: null,
      removeSuccess: null
    };
    this.updateAllCourseList = this.updateAllCourseList.bind(this);
    this.updateStudentCourseList = this.updateStudentCourseList.bind(this);
    this.handleEnroll = this.handleEnroll.bind(this)
    this.updatecurrentCourseListNames = this.updatecurrentCourseListNames.bind(this)
    this.handleRemoveCourses = this.handleRemoveCourses.bind(this);
    this.RemoveStudentCourse = this.RemoveStudentCourse.bind(this);
  }

  updatecurrentCourseListNames(){
      let tempList = [];
      for (let index = 0; index < this.state.currentCourseList.length; index++) {
        fetch(`/courses/${this.state.currentCourseList[index]}`, {
            method: 'GET'
          })
          .then(res => res.json())
          .then(
            (result) => {
                console.log ("result for course name is "+result.coursename)
                let courseObj = {
                    coursedesc: result.coursedesc,
                    assignment: result.assignment,
                    coursename: result.coursename,
                    coursestartdate: result.coursestartdate,
                    courseenddate: result.courseenddate,
                    coursefinalscrore: result.coursefinalscrore
                }
                console.log(courseObj.coursename)
                // const courseObj = Object.assign({}, request.body);
            tempList.push(courseObj);
            console.log("templist is "+tempList)
            this.setState({
                currentCourseListNames: tempList
            });
            },
            (error) => {
              this.setState({
                allcourseLoaded: false,
                error
            });
          }
        )

          
      }
      
  }

  loadAllCourses() {
    fetch("/courses", {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
            console.log ("result for all courses is "+result)
          this.setState({
            allcourseLoaded: true,
            allCourseList: result
          });
          this.loadCurrentCourses();
   
        },
        (error) => {
          this.setState({
            allcourseLoaded: false,
            error
        });
      }
    )
    console.log(this.state.allCourseList);
  }

  loadCurrentCourses() {
    const studentID = '5fd42e98feb2286945101368';
    fetch(`/students/${studentID}/courses`, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
            console.log ("result for current courses is "+result.courses)
          this.setState({
            currentCourseLoaded: true,
            currentCourseList: result.courses
          });
          this.updateAllCourseList();
        },
        (error) => {
          this.setState({
            currentCourseLoaded: false,
            error
        });
      }
    )
    console.log(this.state.currentCourseList);
  }

  updateStudentCourseList() {
      const studentid = '5fd42e98feb2286945101368';
      const courseid = '5fd45523feb2286945101382';
      fetch(`/students/${studentid}`, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
            console.log("result is "+result)
            let courses= result.message.courses;
            console.log("courses is "+courses)
            let user= result.message.user;
            console.log("user is "+user)
            let newCourse = {
                "_id": `${courseid}`
            }
            courses.push(newCourse)
            console.log(courses);
            fetch(`/students/${studentid}`, {
                method: 'PUT',
                body: JSON.stringify({
                    "courses": courses,
                    "user": user
                  }
                ),
                headers: {"Content-Type": "application/json"}
              })
              .then(res => res.json())
              .then((responseJson) => {
                this.setState({
                    additionSuccess: true})
                console.log("Successfully added course to  the student");
              });
        },
        (error) => {
          this.setState({
            additionSuccess: false,
            error
        });
      }
    )
    
  }


  RemoveStudentCourse() {
    const studentid = '5fd42e98feb2286945101368';
    const courseid = '5fd45523feb2286945101382';

    fetch(`/students/${studentid}`, {
      method: 'GET'
    })
    .then(res => res.json())
    .then(
      (result) => {
          console.log("result is "+result)
          let courses= result.message.courses;
          console.log("courses is "+courses)
          let user= result.message.user;
          console.log("user is "+user)
          let courseToRemove =  [];
          for (let index = 0; index < courses.length; index++) {
            if(courses[index] != courseid ){
              courseToRemove.push(courses[index]);
            }
          }          
          
          console.log(courseToRemove);
          fetch(`/students/${studentid}`, {
              method: 'PUT',
              body: JSON.stringify({
                  "courses": courseToRemove,
                  "user": user
                }
              ),
              headers: {"Content-Type": "application/json"}
            })
            .then(res => res.json())
            .then((responseJson) => {
              this.setState({
                  removeSuccess: true})
              console.log("Successfully removed course to  the student");
            });
      },
      (error) => {
        this.setState({
          removeSuccess: false,
          error
      });
    }
  )
  
}

  updateAllCourseList(){
      console.log("in updateAllCourseList")
      let currentAllCourseList = this.state.allCourseList;
      let currentEnrolledCourse = this.state.currentCourseList;
      let newAllCourseList = [];
      for (let index = 0; index < currentEnrolledCourse.length; index++) {
          for (let j = 0; j < currentAllCourseList.length; j++) {
              console.log("Compare = "+currentEnrolledCourse[index] +"  "+ currentAllCourseList[j].id)
              if(currentEnrolledCourse[index] !== currentAllCourseList[j].id){
                newAllCourseList.push(currentAllCourseList[j])
                console.log("Added the course successfully")
              }
          }
      }
      this.setState({
        newAllCourseList: newAllCourseList,
        rows : newAllCourseList
    });
    this.updatecurrentCourseListNames();
  }

  componentDidMount() {
    this.loadAllCourses();
  }


  handleEnroll(name,e){
      console.log("e is "+e)
      this.updateStudentCourseList();
      if(this.state.additionSuccess){
        this.props.history.push(`/dashboard`);
      }

  }

  handleRemoveCourses(name,e){
    console.log("e is "+e)
    this.RemoveStudentCourse();
    if(this.state.removeSuccess){
      this.props.history.push(`/dashboard`);
    }
}


  render(){
      
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!(this.state.allCoursesLoaded || this.state.currentCourseLoaded)) {
      return <div>Loading...</div>;
      } else {
          let currentCourseList = this.state.currentCourseListNames
          let allCourseList = this.state.allCourseList
          let newAllCourseList = this.state.newAllCourseList
          if(currentCourseList.length>= 2){
              return <div>Credit hour limit exceeded
                  {/* <Redirect to="/dashboard" /> */}
              </div>;
          }
          if(currentCourseList.length == 0){
            let isEnrolled = false;
            let stringop = "Not enrolled with any course currently"
          }
        return(
            <div>
                <h3>Current Courses are </h3>
            <div>
            <ul>
                {currentCourseList.map((courseObj,index) =>{
                        return <li key={index}>{courseObj.coursename}</li>
                } 
                )}
            </ul>
            </div>
                
                <br>
                </br>
                <h3>All Courses are </h3>
                <div>
                <ul>
                    {allCourseList.map((courseObj,index) =>{
                        return <li key={index}>{courseObj.coursename}</li>
                    }
                        
                    )}
                </ul>
                </div>
                <h3>New Courses without enrolled courses</h3>
                <div>
                <ul>
                    {newAllCourseList.map((courseObj,index) =>{
                        return <li key={index}>{courseObj.coursename}</li>
                    }
                        
                    )}
                </ul>
                </div>
                <div  onClick={(e) => this.handleEnroll('/enrollCourses', e)}>Enroll</div>
                <div  onClick={(e) => this.handleRemoveCourses('/enrollCourses', e)}>Remove</div>
            
            
              {/* {!this.state.additionSuccess ? (
              <div className="alert alert-danger" role="alert">
              Enrollment failed
            </div>
            ) : (
              ''
            )}
            {!this.state.removeSuccess ? (
              <div className="alert alert-danger" role="alert">
              Remove failed
            </div>
            ) : (
              ''
            )} */}
             {/* <div>
                 <h3>Current Courses are </h3>
             </div>
               <Table responsive striped condensed hover>
              <thead>
                <tr>
                  <th> </th>
                  <th> Course Name </th>
                  <th> Action </th>
                  <th> </th>
                </tr>
              </thead>
          <tbody>
          {currentCourseList.map((c) => {
            return <tr>
              <td>{c.coursename} </td>
              <td> <button type="button" className="btn btn-danger" onClick={(e) => this.handleRemoveCourses('/enrollCourses', e)}>Remove Course</button></td>
            </tr>
          })}
        </tbody>
        </Table>

        <div>
                 <h3>Available Courses </h3>
             </div>
               <Table responsive striped condensed hover>
              <thead>
                <tr>
                  <th> </th>
                  <th> Course Name </th>
                  <th> Action </th>
                  <th> </th>
                </tr>
              </thead>
          <tbody>
          {newAllCourseList.map((c) => {
            return <tr>
              <td>{c.coursename} </td>
              <td> <button type="button" className="btn btn-success" onClick={(e) => this.handleEnroll('/enrollCourses', e)}>Remove Course</button></td>
            </tr>
          })}
        </tbody>
        </Table> */}
            </div>
        
        )
      }
  }



}


export default EnrollCourses;
