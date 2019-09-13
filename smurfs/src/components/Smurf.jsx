import React from 'react';

function Smurf({smurf}) {
	return(
		<div>
			<h1>Name: {smurf.name}</h1>
			<h3>Age: {smurf.age}</h3>
			<h3>Height: {smurf.height}</h3>
		</div>
	)
}

export default Smurf;