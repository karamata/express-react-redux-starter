import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TopControlContainer from './TopControlContainer';
import SmallRightContainer from './SmallRightContainer';
import AdvertingContainer from './AdvertingContainer';

class RightContainer extends React.Component {
  render() {
    const currentOnSmallContainer = this.props.currentOnSmallContainer;
    return (
      <div>
        <div className="row" style={{height: '100px', minHeight: '100px'}}>
          <TopControlContainer></TopControlContainer>
        </div>
        <div className="row" style={{height: 'calc(100% - 400px)', minHeight: 'calc(100% - 400px)'}}>
          <SmallRightContainer></SmallRightContainer>
        </div>
        <div className="row" style={{height: '300px', minHeight: '300px'}}>
          <AdvertingContainer></AdvertingContainer>
        </div>
      </div>
    );
  }
}

export default RightContainer;
