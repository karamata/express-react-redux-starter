import { ACTION_TYPE } from '../constants';

export function openClassAction(userLogin, course) {
	console.log('========openClassAction=========');
	console.log(userLogin);
	console.log(course);
	console.log('========openClassAction=========');
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