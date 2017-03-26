import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LeftContainer from './container/LeftContainer';
import RightContainer from './container/RightContainer';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Grid className="class-container" fluid>
        <Row className="class-main-container">
          <Col xs={12} md={9} className="class-main-container-left">
            <LeftContainer/>
          </Col>
          <Col xs={12} md={3}>
            <RightContainer/>
          </Col>
        </Row>
        <Row className="class-footer">
          <Col xs={12} md={12}>
            Footer
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
