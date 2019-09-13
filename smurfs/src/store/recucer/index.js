import { GET_SMURFS, GET_SMURFS_SUCCESS, POST_SMURF} from '../actions'
// Create initial State
const initialState = {
	smurfs: [],
	isFetching: false,
	error: ""
}

// Create Reducer
export const reducer = (state = initialState, action) => {
	switch(action.type) {
		// GET_SMURFS
		case GET_SMURFS:
			return{
				...state,
				isFetching: true
			}
		// GET_SMURFS_SUCCESS
		case GET_SMURFS_SUCCESS:
		return {
				...state,
				isFetching: false,
				smurfs: action.payload
			}
		// POST_SMURF
		case POST_SMURF:
			return {
				...state,
				smurfs: action.payload
			}
		// Return state on initial render
		default:
			return state;
	}
}