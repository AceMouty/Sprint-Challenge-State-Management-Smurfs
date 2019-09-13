// This form is used to add in a smurf

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postSmurf } from '../store/actions/index'

function Form({ postSmurf }) {

	// Create State to trackInputs
	const [smurf, setSmurf] = useState({name: "", age: "", height: ""})

	// Create a changeHandler
	const changeHandler = e => {
		// Check if we are in the age field if so convert from a string to a number
		if(e.target.name === "age"){
			console.log(parseInt(e.target.value))
			setSmurf({...smurf, [e.target.name]: parseInt(e.target.value)})
		} else {
			setSmurf({...smurf, [e.target.name]: e.target.value})
		}
		
	}
	// Create a submitHadler
	const submitHandler = e => {
		e.preventDefault();
		postSmurf(smurf);
		setSmurf({name: "", age: "", height: ""})
	}
	return(
		<React.Fragment>
			<form onSubmit={submitHandler}>
				<input 
					type="text"
					placeholder="Enter Smurf Name"
					name="name"
					value={smurf.name}
					onChange={changeHandler}
				/>
				<input 
					type="text"
					placeholder="Enter Smurf Age"
					name="age"
					value={smurf.age}
					onChange={changeHandler}
				/>
				<input 
					type="text"
					placeholder="Enter Smurf Height"
					name="height"
					value={smurf.height}
					onChange={changeHandler}
				/>
				<button>Submit</button>
			</form>
		</React.Fragment>
	)
}

// Connect component to the store
export default connect(null, {postSmurf})(Form);