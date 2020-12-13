import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from '../NavBar';
import UpdateProfile from './UpdateProfile';
import UpdatePassword from './UpdatePassword';

import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/user.action';


class Profile extends Component {

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
const reduxProps = state => {
	return ({
	  profile: state.user.authUser
	})
  };
  
  
export default connect(reduxProps, { registerUser })(Profile);