import { combineReducers } from 'redux';
import { ACTION_TYPE } from '../constants';

function openClassReducer(state = {}, action) {
	console.log('========openClassReducer=========');
	console.log(state);
	console.log(action);
	console.log(action.type);
	console.log('========openClassReducer=========');

	if(action.type == ACTION_TYPE.OPEN_CLASS) {
		return {
			...state,
			me: action.data.userLogin,
			course: action.data.course
		};
	}
}

function joinClassReducer(state = {}, action) {
	if(action.type == ACTION_TYPE.JOIN_CLASS) {
		return {
			...state,
			me: action.data.userLogin,
			course: action.data.course
		};
	}
}

const rootReducer = combineReducers({
  openClassReducer,
  joinClassReducer
});

export default rootReducer;
