import React, {Component} from 'react';
import {Form, FormGroup, FormControl, Button, FormLabel,} from 'react-bootstrap';
import './Authentication.scss';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/user.action';
import { removeError } from '../../store/actions/error.action';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coursename: '',
      coursestartdate: '',
      courseenddate: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps)
    if (newProps.errorMesage == undefined) {
        this.props.removeError()
    }
    if (Object.keys(newProps.auth).length > 0 ) {
      alert(newProps.auth);
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
    this.props.loginUser(this.state);
  }

  render(){
    return(
      <Form onSubmit={this.submitForm}>
        <FormGroup controlId="coursename">
          <FormLabel>Course Name</FormLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter Course Name" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="coursestartdate">
          <FormLabel>Course Start Date</FormLabel>
          <FormControl type="date" value={this.state.value} placeholder="Enter Course Start Date" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="courseenddate">
          <FormLabel>Course End Date</FormLabel>
          <FormControl type="date" value={this.state.value} placeholder="Enter Course End Date" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
      </Form>

  )
  }
}

//export default Login;
const reduxProps = state => {
  return ({
    auth: state.user.authUser,
    errorMesage: state.errors.message
  })
};


export default connect(reduxProps, { loginUser, removeError })(Login);
