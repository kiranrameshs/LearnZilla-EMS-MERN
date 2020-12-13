import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import { removeError } from '../../store/actions/error.action';

class AssignCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      teacherid: '',
      courseid: '',
      teacherList: [],
      courseList: [],
      courseLoaded: false,
      teacherLoaded: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  loadCourses() {
    fetch("/courses", {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            courseLoaded: true,
            courseList: result
          });
        },
        (error) => {
          this.setState({
            courseLoaded: false,
            error
        });
      }
    )
    //console.log(this.state.courseList);
  }

  loadTeachers() {
    fetch("/teachers", {
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

  updateTeacher(teacherid, courseid) {
    let editUrl = "/teachers/" + teacherid;
    fetch(editUrl, {
      method: 'PUT',
      body: JSON.stringify({
          "course": courseid,
          "salary": 50000.00
        }
      ),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then((responseJson) => {
      alert("here")
  //    console.log(responseJson);
    });
  }

  componentDidMount() {
    this.loadTeachers();
    this.loadCourses();
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
    this.updateTeacher(teacherid, courseid);
    alert("Course is assigned successfully! Redirect to SuccessPage");
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
              <FormLabel>Teacher Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Teacher</option>
                {this.state.teacherList.map((t, index) => <option key={index} value={t.id} >{t.id}</option>)}
              </FormControl>
            </FormGroup>

            <FormGroup controlId="courseid">
              <FormLabel>Course Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option>Select Course</option>
                {this.state.courseList.map((c, index) => <option key={index} value={c.id} >{c.coursename}</option>)}
              </FormControl>
            </FormGroup>

            <FormGroup>
              <Button type="submit">Assign Course</Button>
            </FormGroup>
          </Form>
        )
      }
  }
}


export default AssignCourse;
