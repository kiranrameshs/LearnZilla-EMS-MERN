import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import { removeError } from '../../store/actions/error.action';

class GradeStudents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      teacherid: '',
      courseid: '',
      courseid: '',
      grade: 0,
      studentList: [],
      studentLoaded: false,
      teacherLoaded: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
        //  console.log(this.state.teacherList);
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
    let userState = this.props.auth;
    let id = userState.user._id;
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
    let courseid = this.state.courseid;
    let salary = this.state.salary;
    this.updateStudent(studentid, grade);
    //alert("Course is assigned successfully! Redirect to SuccessPage");
    this.props.history.push('/success');
  }

  render(){
      //console.log(this.state.courseList);
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.courseLoaded) {
      return <div>Loading...</div>;
      } else {
        return(
          <Form onSubmit={this.submitForm}>
            <FormGroup controlId="teacherid">
              <FormLabel>Student Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Teacher</option>
                {this.state.teacherList.map((t, index) => <option key={index} value={t.id} >{t.id}</option>)}
              </FormControl>
            </FormGroup>


            <FormGroup controlId="salary">
              <FormLabel>Student Grade</FormLabel>
              <FormControl type="Number" value={this.state.value} placeholder="Enter Student Grade" onChange={this.handleInput} />
            </FormGroup>

            <FormGroup>
              <Button type="submit">Assign Course</Button>
            </FormGroup>
          </Form>
        )
      }
  }
}


export default GradeStudents;
