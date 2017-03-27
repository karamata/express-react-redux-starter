import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import SmallBoardContainer from './SmallBoardContainer';
import ElementContainer from './ElementContainer';

class SmallRightContainer extends React.Component {
  render() {
    const currentOnRight = this.props.currentOnRight;
    let html = (
      <div style={{width: '100%', height: '100%'}}>
        <SmallBoardContainer/>
      </div>
    );

    if(currentOnRight && currentOnRight.type === 'VIDEO') {
      html = (
        <div style={{width: '100%', height: '100%'}}>
          <SmallBoardContainer/>
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
    currentOnRight: state.currentOnRight
  };
};

export default connect(mapStateToProps)(SmallRightContainer);
