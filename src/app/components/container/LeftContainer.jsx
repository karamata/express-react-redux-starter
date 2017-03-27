import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import BigBoardContainer from './BigBoardContainer';
import ElementContainer from './ElementContainer';
import './LeftContainer.scss';

class LeftContainer extends React.Component {
  render() {
    const currentOnLeft = this.props.currentOnLeft;
    let html = (
      <div style={{width: '100%', height: '100%'}}>
        <BigBoardContainer/>
      </div>
    );
    if(currentOnLeft && (currentOnLeft.type === 'VIDEO' || currentOnLeft.type === 'SCREEN')) {
      currentOnLeft.stream.controls = false;
      currentOnLeft.stream.style.width = '100%';
      currentOnLeft.stream.style.objectFit = 'fill';
      html = (
          <div style={{width: '100%', height: '100%'}}>
            <BigBoardContainer style={{display: 'none'}}/>
            <ElementContainer element={currentOnLeft.stream}/>
          </div>
      );
    }
    return (
      html
    );
  }
}

const mapStateToProps = state => {
  return {
    currentOnLeft: state.currentOnLeft
  };
};

export default connect(mapStateToProps)(LeftContainer);
