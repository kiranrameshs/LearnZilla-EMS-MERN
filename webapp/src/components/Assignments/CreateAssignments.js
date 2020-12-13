import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import { connect } from 'react-redux';
import { createAssignment } from '../../store/actions/assignment.action';
import { loginUser } from '../../store/actions/user.action';
import { removeError } from '../../store/actions/error.action';


// const userReduxProps = state => {
//   return ({
//     auth: state.user.authUser
//   })
// };

class CreateAssignments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      assignmentname: '',
      assignmentdescription: '',
      assignmentstartdate: '',
      assignmentenddate: '',
      assignmentscrore: 0
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps (newProps) {
    console.log("newProps " + newProps)
    if (newProps.errorMesage == undefined) {
        this.props.removeError()
    } else {
      alert("Redirect to Dashboard");
      this.props.history.push('/dashboard')
    }
    // if (Object.keys(newProps.auth).length > 0 ) {
    //   alert(newProps.auth);
    //   this.props.history.push('/dashboard')
    // }
  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
  }

  submitForm(e){
    e.preventDefault();
    this.props.createAssignment(this.state);
    alert("Assignment is added successfully!");
  }

  render(){

    let userState = this.props.auth;
    console.log(userState);

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
