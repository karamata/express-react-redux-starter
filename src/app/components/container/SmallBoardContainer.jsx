import React from 'react';
import { connect } from 'react-redux';

import './SmallBoardContainer.scss';

class SmallBoardContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.smallBoardDesigner) {
			this.props.smallBoardDesigner.appendTo(document.getElementById('small-board-container'));
		}
	}

	render() {
		return (
			<div style={{width: '100%', height: '100%'}} className="small-board-container" id="small-board-container">
		    </div>
		);
	}
}

const mapStateToProps = state => {
  	return {
    	smallBoardDesigner: state.smallBoardDesigner
  	};
};

export default connect(mapStateToProps)(SmallBoardContainer);
