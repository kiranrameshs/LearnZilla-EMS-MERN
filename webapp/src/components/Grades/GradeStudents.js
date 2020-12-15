import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
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
          this.loadStudents();
        },
        (error) => {
          this.setState({
            error
        });
      }
    )
  }

  loadStudents() {
    let id = this.state.courseid;
    let url = "/courses/" + id + "/students";
    //alert(url);
    fetch(url, {
        method: 'GET'
      })
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            studentLoaded: true,
            studentList: result.students
          });
        },
        (error) => {
          this.setState({
            studentLoaded: false,
            error
        });
      }
    )

  }

  updateStudent(studentid, grade) {
    alert(studentid + " " + grade);
    let editUrl = "/students/" + studentid;
    fetch(editUrl, {
      method: 'PUT',
      body: JSON.stringify({
          "finalgrade": grade
        }
      ),
      headers: {"Content-Type": "application/json"}
    })
    .then(res => res.json())
    .then((responseJson) => {
      console.log(responseJson);
    });
  }

  componentDidMount() {
    let id = JSON.parse(localStorage.getItem("user")).id;
    let url = "/teachers/users/" + id;
  //  alert(url);
    this.getTeacherIdCourseId(url);

  }

  handleInput(e) {
    let id = e.target.id;
    let val = e.target.value;
    // console.log(id);
    // console.log(val);
    this.setState({
      [id]: val
    });

  }

  submitForm(e){
    e.preventDefault();
    let studentid = this.state.studentid;
    let grade = this.state.grade;
    this.updateStudent(studentid, grade);
    //alert("Course is assigned successfully! Redirect to SuccessPage");
    this.props.history.push('/success');
  }

  render(){
      if (this.state.error) {
        return <div>Error: {this.state.error.message}</div>;
      } else if (!this.state.studentLoaded) {
      return <div>Loading...</div>;
      } else {
        return(
          <Form onSubmit={this.submitForm}>
            <FormGroup controlId="studentid">
              <FormLabel>Student Name</FormLabel>
              <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
                <option placeholder="Select Student" > Select Student </option>
                {this.state.studentList.map((t, index) => <option key={index} value={t} >{t}</option>)}
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
      }
  }
}


export default GradeStudents;
