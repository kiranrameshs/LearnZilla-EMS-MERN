import React, { Component } from 'react';
import profile from '../assets/profile.png'
import { Navbar,Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '.././store/actions/user.action';

class NavBar extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        // this.state=props;
        // need to change this. can't directly assign props to the state. bad practice
    }

    logout(e){
      // alert("Logout");
      e.preventDefault();
      this.props.logoutUser();
      //alert("User Logged Out! Log in here");
    }

    componentDidMount() {

    }
      render(props) {
        let fname = "Ron";//this.props.fname;
        return (
          <>
            <nav className="navbar navbar-inverse">
              <div className="container-fluid">
                <div className="navbar-header">
                  <a className="navbar-brand" href="#"> <span className="glyphicon glyphicon-education"></span> LearnZilla</a>
                </div>
                <ul className="nav navbar-nav">
                  <li className="active"><a href="#"><span className="glyphicon glyphicon-home"></span> Home</a></li>
                  <li><a>Courses</a></li>
                  <li><a>Grade</a></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> My profile</a></li>
                  <li><a href="/login" onClick={this.logout}><span className="glyphicon glyphicon-log-out"></span> LOGOUT</a></li>
                </ul>
              </div>
            </nav>

          </>
        );
      }

}

//export default NavBar;

const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps, {logoutUser})(NavBar);
