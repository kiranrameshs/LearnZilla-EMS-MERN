import React, { Component } from 'react';
import NavBar from '../NavBar';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';
import { logoutUser } from '../../store/actions/user.action';

const userreduxProps = state => {
  return ({
    auth: state.user.authUser
  })
};

class Profile extends Component {

  // componentDidMount(){
  //   let userState = JSON.parse(localStorage.getItem("user"));
  //   let id = userState.user._id;
  // }

    render() {
        return(
            <>
            <NavBar />

            <div className="well profile">
              <ul className="nav nav-tabs ">
                <li className="active"><a href="#home" data-toggle="tab">Profile</a></li>
                <li><a href="#profile" data-toggle="tab">Password</a></li>
              </ul>
              <div id="myTabContent" className="tab-content">

                <UpdateProfile />
                <UpdatePassword />

              </div>
            </div>
            </>
        );
    }
}


//export default Profile;
// const reduxProps = state => {
// 	return ({
//    // profile: state.user.authUser,
//     auth: state.user.authUser
// 	})
//   };
  
  
export default connect(userreduxProps, { registerUser,logoutUser })(Profile);