import { ACTION_TYPE, ROOM_ROLE } from '../constants';

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

export function initBigBoardAction(connection, userLogin) {
	if(userLogin.roomRole == ROOM_ROLE.TEACHER) {
		const bigBoardDesigner = new CanvasDesigner();

		bigBoardDesigner.widgetHtmlURL = '/static/widget.html';

		bigBoardDesigner.widgetJsURL = '/static/widget.js';

		bigBoardDesigner.addSyncListener(data => {
			connection.send({
				userDrawing: userLogin,
		        drawingData: data
		    });
		});

		bigBoardDesigner.setSelected('pencil');

		bigBoardDesigner.setTools({
			pencil: true,
		    text: true,
		    image: true,
		    eraser: true,
		    line: true,
		    arrow: true,
		    dragSingle: true,
			zoom: true
		});

		return {
			type: ACTION_TYPE.INIT_BIG_BOARD,
			data: {
				bigBoardDesigner: bigBoardDesigner
			}
		};
	} else {
		const bigBoardDesigner = new CanvasDesigner();

		bigBoardDesigner.widgetHtmlURL = '/static/widget.html';

		bigBoardDesigner.widgetJsURL = '/static/widget.js';

		return {
			type: ACTION_TYPE.INIT_BIG_BOARD,
			data: {
				bigBoardDesigner: bigBoardDesigner
			}
		};
	}
}

export function initMyStreamAction(eventStream, userLogin) {
	if(userLogin.roomRole === ROOM_ROLE.TEACHER) {
		if(eventStream.stream && eventStream.stream.isVideo && !eventStream.stream.isScreen) {
			return {
				type: ACTION_TYPE.INIT_MY_STREAM,
				data: {
					videoStream: eventStream.stream,
					videoMediaElement: eventStream.mediaElement,
				}
			};
		} else if(eventStream.stream && eventStream.stream.isVideo && eventStream.stream.isScreen) {
			return {
				type: ACTION_TYPE.INIT_MY_STREAM,
				data: {
					screenStream: eventStream.stream,
					screenMediaElement: eventStream.mediaElement
				}
			};
		} else if(eventStream.stream && eventStream.stream.isAudio) {
			return {
				type: ACTION_TYPE.INIT_MY_STREAM,
				data: {
					audioStream: eventStream.stream,
					audioMediaElement: eventStream.mediaElement
				}
			};
		}
	}
} 