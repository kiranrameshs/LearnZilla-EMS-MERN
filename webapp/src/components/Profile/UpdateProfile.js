import React, { Component } from 'react';

import { connect } from 'react-redux';
import { updateUser } from '../../store/actions/user.action';


class Profile extends Component {

	constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
      }


    submitForm(e){
		e.preventDefault();
		let username = document.getElementById('username').value;
		let email = document.getElementById('email').value;
		let address = document.getElementById('address').value;
		let data = {};
		data.username = username;
		data.email = email;
		data.address = address;
		let id = "5fd4529dfeb228694510137f";
		this.props.updateUser(id, data);
        
    }

    render() {
		let p ={
			"address": "2817 S 49t Apt 314 San Jose, CA 95101 ",
			"name": "Name 2",
			"email": "asdefr",
			"university": "NEU"
		}// this.props.profile
        return(
            <>
		<div className="tab-pane active in" id="home">
			<form id="tab" onSubmit={this.submitForm} >
				<label>Username</label> <br />
				<input id="username" type="text" value={p.name} className="input-xlarge" /> <br />
				<label>Email</label><br />
				<input id="email" type="text" value={p.email} className="input-xlarge" /> <br />
				<label>Address</label><br />
				<textarea id="address" value={p.address} rows="3" className="input-xlarge"></textarea> <br />
				<label>University: </label>
				<label className="input-xlarge">  {p.university}</label> 
				<br />
				<br />
				<div>
					<button className="btn btn-primary">Update</button>
				</div>
			</form>
		</div>
            
            </>
            


        );
      
    }
}


//export default Profile;
const reduxProps = state => {
	return ({
	  
	})
  };
  
  
export default connect(reduxProps, { updateUser })(Profile);