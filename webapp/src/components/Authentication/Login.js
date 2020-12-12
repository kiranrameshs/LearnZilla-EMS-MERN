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
      email: '',
      password: '',
      role: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps (newProps) {
    //console.log(newProps)
    //alert(Object.keys(newProps.auth));
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
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl type="text" value={this.state.value} placeholder="Enter email" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" value={this.state.value} placeholder="Enter password" onChange={this.handleInput} />
        </FormGroup>

        <FormGroup controlId="role">
          <FormLabel>Role</FormLabel>
          <FormControl as="select" value={this.state.value} onChange={this.handleInput}>
            <option>Enter Role</option>
            <option>Teacher</option>
            <option>Student</option>
            <option>Admin</option>
          </FormControl>
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
