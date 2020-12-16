import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter, Route, } from 'react-router-dom';
import Login from '../Authentication/Login';
import { Link } from 'react-router-dom';
import './SideBar.scss';
import { connect } from 'react-redux';
import { logoutUser } from '../../store/actions/user.action';


const reduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.state = {menu: [
      {name: "Home", url: "/", role: 0},
      //{name: "All Courses", url: "/courses", role: 0},
      {name: "All Users", url: "/all-users", role: 1},
      {name: "My Courses", url: "/dashboard", role: 0},
      {name: "Create Course", url: "/courses/create", role: 1},
      {name: "Edit Teacher ", url: "/teachers/edit", role: 1},
      {name: "Create User", url: "/register", role: 1},
      {name: "Create Assignment", url: "/assignments/create", role: 3},
      {name: "Grade Assignment", url: "/assignments/edit", role: 3},
      {name: "Grade Course", url: "/students/grade", role: 3},
    ]}

    this.logout = this.logout.bind(this);
}


/** logout is a different function in link list*/
logout(e){
  this.props.logoutUser()
}

/** Generating asll links depending on user role*/
generateLinks(menuItems){
    return menuItems.map((exp,i) => {
        return (
          <li class="sidebarLinks">
            <a key={i} componentClass='span'>
              <Link replace to={{pathname: exp.url}}>  {exp.name} </Link>
            </a>
          </li>
        )
    })
  }

  render() {
    let userState;
    let role;
    /*role --> admin = 1, student = 2, teacher = 3*/

    if (this.props.auth === undefined) {
        role = "Admin"
    } else {
      userState = this.props.auth.user
      role = this.props.auth.user.role
    }

    let menuItems = this.state.menu.filter(el => {

      if (role == "Student") {
        if (el.role === 0 || el.role === 2) {
          return true;
        } else return false;
      }

      if (role == "Teacher") {
        if (el.role === 0 || el.role === 3) {
          return true;
        } else return false;
      }

      if (role == "Admin") {
        if (el.role === 1) {
          return true;
        } else return false;
      }

    })

    let finalLinks = this.generateLinks(menuItems)
    // console.log(finalLinks);

      return(
            <ul>
              {finalLinks}
              <NavItem key="logout" >
                <Link replace to="/login" onClick={this.logout}>  Logout </Link>
              </NavItem>
            </ul>
          )
  }
}

export default connect(reduxProps, {logoutUser})(Sidebar);
