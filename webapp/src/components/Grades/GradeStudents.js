import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import { connect } from 'react-redux';
import { createAssignment } from '../../store/actions/assignment.action';
import { removeError } from '../../store/actions/error.action';
import { logoutUser } from '../../store/actions/user.action';

const userreduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class GradeStudents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      teacherid: '',
      courseid: '',
      studentid: '',
      grade: 0,
      studentList: [],
      studentLoaded: false,
      teacherLoaded: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.getTeacherIdCourseId = this.getTeacherIdCourseId.bind(this);
  }

  getTeacherIdCourseId(url)  {
    alert("here" + url)
    fetch(url, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result.message[0]);
          this.setState({
            teacherid: result.message[0].id,
            courseid: result.message[0].course
          });
        },
        (error) => {
          this.setState({
            error
        });
      }
    )
  }

  loadStudents() {
    fetch("/students", {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            teacherLoaded: true,
            teacherList: result
          });
        },
        (error) => {
          this.setState({
            teacherLoaded: false,
            error
        });
      }
    )
  }

  updateStudent(studentid, grade) {
    let editUrl = "/students/" + studentid;
    fetch(editUrl, {
      method: 'PUT',
      body: JSON.stringify({
          "grade": grade
        }
      ),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then((responseJson) => {
  //    alert("here")
      console.log(responseJson);
    });
  }

  componentDidMount() {
    let id = JSON.parse(localStorage.getItem("user")).id;
    //console.log(id);
    let url = "/teachers/users/" + id;
    this.getTeacherIdCourseId(url);
    this.loadStudents();
  }

  handleInput(e) {
    let id = e.target.id;
    let val = e.target.value;
    //console.log(id);
    //console.log(val);
    this.setState({
      [id]: val
    });

  }

  submitForm(e){
    e.preventDefault();
    let teacherid = this.state.teacherid;
    let studentid = this.state.courseid;
    let grade = this.state.salary;
    this.updateStudent(studentid, grade);
    //alert("Course is assigned successfully! Redirect to SuccessPage");
    this.props.history.push('/success');
  }

  render(){
      //console.log(this.state.courseList);
      // if (this.state.error) {
      //   return <div>Error: {this.state.error.message}</div>;
      // } else if (!this.state.courseLoaded) {
      // return <div>Loading...</div>;
      // } else {
        return(
          <Form onSubmit={this.submitForm}>
            <FormGroup controlId="teacherid">
              <FormLabel>Student Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Teacher</option>
                {this.state.studentList.map((t, index) => <option key={index} value={t.id} >{t.id}</option>)}
              </FormControl>
            </FormGroup>


            <FormGroup controlId="grade">
              <FormLabel>Student Grade</FormLabel>
              <FormControl type="Number" value={this.state.value} placeholder="Enter Student Grade" onChange={this.handleInput} />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Grade Student</Button>
            </FormGroup>
          </Form>
        )
      //}
  }
}


export default GradeStudents;
