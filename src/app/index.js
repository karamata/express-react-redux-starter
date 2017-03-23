import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import './rtcmulticonnection/RTCMultiConnection';
import { ROOM_ROLE } from './constants';
import { openClassAction, joinClassAction} from './actions';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

const userLogin = {
  userId: 1,
  username: 'customer',
  realName: 'Customer',
  roleType: 'CUSTOMER'
};

const course = {
  courseCode: 'FAGWDFAD'
};

document.addEventListener("DOMContentLoaded", function(event) {
  var connection = new RTCMultiConnection();
  DetectRTC.load(function() {
    const isAudioEnable = DetectRTC.hasMicrophone;
	  const isVideoEnable = DetectRTC.hasWebcam;

    connection.extra = {
			userId : 1,
			username : 'admin',
			realName : 'Administrator',
			isAudioEnable : isAudioEnable,
			isVideoEnable : isVideoEnable
		};

    connection.socketURL = 'https://ws.edinnova.com/';

	  connection.socketMessageEvent = 'edinnova-virtual-classroom-event-message';

	  connection.socketCustomEvent = 'edinnova-virtual-classroom-custom-message';

    connection.session = {
      data: true,
      audio: isAudioEnable,
      video: isVideoEnable
	  };

    connection.enableLogs = true;

    connection.sdpConstraints.mandatory = {
      OfferToReceiveAudio: isAudioEnable,
      OfferToReceiveVideo: isVideoEnable
    };

    const videoConstraint = connection.mediaConstraints.video;

    const audioConstraint = connection.mediaConstraints.audio;

    if(!isAudioEnable) {
      connection.mediaConstraints.audio = false;
    } else {

    }

    if(!isVideoEnable) {
      connection.mediaConstraints.video = false;
    } else {

    }

    connection.getScreenConstraints = function(callback) {

    };

    connection.onstream = function(event) {
      console.log(event);
    };

    connection.onNewParticipant = function(participantId, userPreferences) {

    };

    connection.onspeaking = function (e) {

    };

    connection.onsilence = function (e) {

    };

    connection.onvolumechange = function(event) {

    };

    connection.onstreamended = function(event) {

    };

    connection.onUserStatusChanged = function(event) {

    };

    connection.onExtraDataUpdated = function(event) {

    };

    connection.onmessage = function (event) {

    };

    connection.onFileStart = function(file) {

    };

    connection.onFileProgress = function(chunk) {

    };

    connection.onFileEnd = function(file) {

    };

    function prepareToJoin() {
      connection.checkPresence(course.courseCode, function(isRoomEists, roomid) {
        if(isRoomEists) {
          connection.join(roomid, function() {
            if(userLogin.roleType === ROOM_ROLE.CUSTOMER || userLogin.roleType === ROOM_ROLE.TEACHER) {
              userLogin.roomRole = ROOM_ROLE.MODERATOR;
            } else {
              userLogin.roomRole = ROOM_ROLE.STUDENT;
            }
            store.dispatch(joinClassAction(userLogin, course));
          });
        } else {
          if(userLogin.roleType === ROOM_ROLE.CUSTOMER || userLogin.roleType === ROOM_ROLE.TEACHER) {
            connection.open(course.courseCode);
            store.dispatch(openClassAction(userLogin, course));
          } else {
            setTimeout(function (argument) {
              prepareToJoin();
            }, 1000);
          }
        }
      }); 
    }

    ReactDOM.render(
      <Provider store={store}><App/></Provider>, 
      document.getElementById('react-root'), 
      () => {
        prepareToJoin();
      }
    );
  });
});
