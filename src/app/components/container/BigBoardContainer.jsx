import React from 'react';
import { connect } from 'react-redux';

import './BigBoardContainer.scss';

class BigBoardContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.bigBoardDesigner) {
			this.props.bigBoardDesigner.appendTo(document.getElementById('big-board-container'));
		}
	}

	render() {
		return (
			<div style={{width: '100%', height: '100%'}} className="big-board-container" id="big-board-container">
		    </div>
		);
	}
}

const mapStateToProps = state => {
  	return {
    	bigBoardDesigner: state.bigBoardDesigner
  	};
};

export default connect(mapStateToProps)(BigBoardContainer);
