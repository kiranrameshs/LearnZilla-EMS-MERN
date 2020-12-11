import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/user.action';


class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {menu: [
      {name: "Home", url: "/", role: 0},
      {name: "All Courses", url: "/all-courses", role: 0},
      {name: "My Courses", url: "/my-courses", role: 2},
      {name: "All Users", url: "/all-users", role: 1},
      {name: "Create Course", url: "/create-course", role: 1},
      {name: "Create User", url: "/create-user", role: 1}
    ]}

    this.logout = this.logout.bind(this);
}






const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

export default connect(reduxProps, {logoutUser})(Sidebar);
