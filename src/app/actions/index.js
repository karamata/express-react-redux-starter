import { ACTION_TYPE } from '../constants';

export function openClassAction(userLogin, course) {
	return {
		type: ACTION_TYPE.OPEN_CLASS,
		data: {
			userLogin: userLogin,
			course: course
		}
	};
}

export function joinClassAction(userLogin, course) {
	return {
		type: ACTION_TYPE.JOIN_CLASS,
		data: {
			userLogin: userLogin,
			course: course
		}
	};
}
