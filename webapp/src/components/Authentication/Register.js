import React, {Component} from 'react';
import {
  Form,
  FormGroup,
  FormControl,
  Button,
  FormLabel,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import './Authentication.scss';
import { registerUser } from '../../store/actions/user.action';
import { removeError } from '../../store/actions/error.action';
import NavBar from '../NavBar';
import { Navbar,Nav, NavItem } from 'react-bootstrap' ;
import Sidebar from '../SideBar/SideBar';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      email: '',
      university: '',
      password: '',
      role: ''
    };
    this.submitForm = this.submitForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps (newProps) {
    console.log(newProps);
    if (newProps.errorMesage == undefined) {
        this.props.removeError()
    }

    if (Object.keys(newProps.auth).length > 0 ) {
      //alert(newProps.auth);
      this.props.history.push('/success')
    }
  }

  handleInput(e) {
    let name = e.target.id
    let val = e.target.value
    this.setState({[name]: val})
  }

  submitForm(e){
    e.preventDefault();
    this.props.registerUser(this.state);
    //alert("done")
  }

  render(){
    return(
      <div>
      <NavBar />
      <Navbar className="sidebar">
            <Navbar.Collapse>
              <Sidebar />
            </Navbar.Collapse>
      </Navbar>
      <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            {/* <span className="glyphicon glyphicon-education"></span> */}
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
            <h3>Welcome</h3>
            <p>You are 30 seconds away from learning!</p>
          </div>
          <div className="col-md-9 register-right">

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                <h3 className="register-heading">Register</h3>

                  <Form onSubmit={this.submitForm}>
                    <FormGroup controlId="name">
                      <FormLabel>Name</FormLabel>
                      <FormControl type="text" value={this.state.value} placeholder="Enter name" onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup controlId="address">
                      <FormLabel>Address</FormLabel>
                      <FormControl type="text" value={this.state.value} placeholder="Enter address" onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup controlId="email">
                      <FormLabel>Email</FormLabel>
                      <FormControl type="text" value={this.state.value} placeholder="Enter email" onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup controlId="password">
                      <FormLabel>Password</FormLabel>
                      <FormControl type="password" value={this.state.value} placeholder="Enter password" onChange={this.handleInput} />
                    </FormGroup>
                    <FormGroup controlId="university">
                      <FormLabel>University</FormLabel>
                      <FormControl type="text" value={this.state.value} placeholder="Enter university" onChange={this.handleInput} />
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
                    <Button type="submit" >Register</Button>
                  </FormGroup>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

//export default Register;
const reduxProps = state => {
  return ({
    auth: state.user.authUser,
    errorMesage: state.errors.message
  })
};


export default connect(reduxProps, { registerUser, removeError })(Register);
