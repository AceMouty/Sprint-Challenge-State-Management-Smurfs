
// Create initial State
const initialState = {
	smurfs: null,
	isFetching: false,
	error: ""
}

// Create Reducer
export const reducer = (state = initialState, action) => {
	switch(action.type) {


		// Return state on initial render
		default:
			return state;
	}
}