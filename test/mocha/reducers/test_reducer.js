/* eslint-disable no-undef, no-unused-expressions */
import { expect } from '../test_helper';
import reducers from '../../src/app/reducers';
import { ACTION_TYPE } from '../../src/app/constants';

const createMe = () => {
	return {
	  	userId: 1,
	  	username: 'customer',
	  	realName: 'Customer',
	  	roleType: 'CUSTOMER'
	};
}

const createCourse = () => {
	return {
		courseCode: 'FAGWDFAD'
	};
}

describe('test init my stream for video', function() {
	let state = {
		me: createMe(),
		course: createCourse(),
	}

	state = reducers(state, {
		type: ACTION_TYPE.INIT_MY_STREAM,
		data: {
			videoStream: {id: 1},
			videoMediaElement: {id:2}
		}
	});

	it('expected receive videoStream with id = 1', function(done) {
		expect(state.me.videoStream.id).to.equal(1);
		expect(state.me.videoMediaElement.id).to.equal(2);
		done();
	});

});