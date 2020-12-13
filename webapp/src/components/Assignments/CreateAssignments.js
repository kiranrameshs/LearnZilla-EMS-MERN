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

class CreateAssignments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      assignmentname: '',
      assignmentdescription: '',
      assignmentstartdate: '',
      assignmentenddate: '',
      assignmentscrore: 0,
      teacherid: '',
      courseid: '',
      assignmentid: ''
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
          console.log(result.message[0]);
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

  componentWillReceiveProps (newProps) {
    console.log("newProps " + newProps)
    if (newProps.errorMesage == undefined) {
        this.props.removeError()
    } else {
      alert("Redirect to Dashboard");
      this.props.history.push('/dashboard')
    }
  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
  }

  submitForm(e){
    e.preventDefault();
    this.props.createAssignment(this.state, this.state.assignmentid);
    console.log(this.state.assignmentid);
    //alert("Assignment is added successfully!");
    
    let userState = this.props.auth;
    let id = userState.user._id;
    let url = "/users/teacher/" + id;
    this.getTeacherIdCourseId(url);
    //console.log(this.state.teacherid);
    //console.log(this.state.courseid);
  }

  render(){

    return(

      <Form onSubmit={this.submitForm}>
        <FormGroup controlId="assignmentname">
          <FormLabel>Assignment Name</FormLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter Assignment Name" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="assignmentdescription">
          <FormLabel>Assignment Description</FormLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter Assignment Name" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="assignmentstartdate">
          <FormLabel>Assignment Start Date</FormLabel>
          <FormControl type="date" value={this.state.value} placeholder="Enter Assignment Start Date" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="assignmentenddate">
          <FormLabel>Assignment End Date</FormLabel>
          <FormControl type="date" value={this.state.value} placeholder="Enter Assignment End Date" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Add Assignment</Button>
        </FormGroup>
      </Form>

    )
  }
}

const reduxProps = state => {
  return ({
    assignments: state.assignment.assignments,
    errorMesage: state.errors.message
  })
};

export default connect(reduxProps, { createAssignment, removeError })(CreateAssignments);
