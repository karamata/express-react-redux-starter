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

function initBigBoardReducer (state = {}, action) {
	return {
		...state,
		bigBoardDesigner: action.data.bigBoardDesigner
	};
}

function initMyStream (state = {}, action) {
	const result = {
		...state,
		me: {
			...state.me,
			...action.data
		}
	};

	if(!result.currentOnLeft) {
		if(result.me.videoMediaElement) {
			result.currentOnLeft = {
				type : 'VIDEO',
				stream: result.me.videoMediaElement
			};
		} else if(result.me.screenMediaElement) {
			result.currentOnLeft = {
				type : 'SCREEN',
				stream: result.me.screenMediaElement
			};
		}
	}

	return result;
}

const rootReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTION_TYPE.OPEN_CLASS:
			return openClassReducer(state, action);
		case ACTION_TYPE.JOIN_CLASS:
			return joinClassReducer(state, action);
		case ACTION_TYPE.INIT_BIG_BOARD:
			return initBigBoardReducer(state, action);
		case ACTION_TYPE.INIT_MY_STREAM:
			return initMyStream(state, action);
		default:
			return state;
	}
};


export default rootReducer;
