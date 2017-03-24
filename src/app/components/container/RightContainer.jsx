import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TopControlContainer from './TopControlContainer';
import SmallRightContainer from './SmallRightContainer';
import AdvertingContainer from './AdvertingContainer';

class RightContainer extends React.Component {
  render() {
    const currentOnSmallContainer = this.props.currentOnSmallContainer;
    return (
      <Row>
        <TopControlContainer></TopControlContainer>
      </Row>
      <Row>
        <SmallRightContainer></SmallRightContainer>
      </Row>
      <Row>
        <AdvertingContainer></AdvertingContainer>
      </Row>
    );
  }
}

export default RightContainer;
