import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../constants';


function openClassReducer(state = {}, action) {
	return {
		...state,
		me: action.data.userLogin,
		course: action.data.course
	};
}

function joinClassReducer(state = {}, action) {
	return {
		...state,
		me: action.data.userLogin,
		course: action.data.course
	};
}

const rootReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_CLASS:
			return openClassReducer(state, action);
		case ACTION_TYPE.JOIN_CLASS:
			return joinClassReducer(state, action);
		default:
			return state;
	}
};

export default rootReducer;
