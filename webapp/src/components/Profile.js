import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import NavBar from './NavBar';


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
		<div className="tab-pane active in" id="home">
			<form id="tab" >
				<label>Username</label> <br />
				<input type="text" value="jsmith" className="input-xlarge" /> <br />
				<label>First Name</label><br />
				<input type="text" value="John" className="input-xlarge" /> <br />
				<label>Last Name</label><br />
				<input type="text" value="Smith" className="input-xlarge" /> <br />
				<label>Email</label><br />
				<input type="text" value="jsmith@yourcompany.com" className="input-xlarge" /> <br />
				<label>Address</label><br />
				<textarea value="Smith" rows="3" className="input-xlarge">2817 S 49t Apt 314 San Jose, CA 95101 </textarea> <br />
				<div>
					<button className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
		<div className="tab-pane fade" id="profile">
            <br />
			<form id="tab2">
				<label>New Password</label> <br />
				<input type="password" className="input-xlarge" /><br />
                <label>Confirm Password</label> <br />
				<input type="password" className="input-xlarge" /><br />
                <br />
				<div>
					<button className="btn btn-primary">Update</button>
				</div><br />
			</form>
		</div>
	</div>
</div>
            </>
            


        );
      
    }
}

export default Profile