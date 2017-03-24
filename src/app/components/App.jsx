import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LeftContainer from './container/LeftContainer';
import RightContainer from './container/RightContainer';

class App extends React.Component {
  render() {
    return (
      <Grid className="class-container" fluid>
        <Row>
          <Col xs={12} md={9}>
            <LeftContainer/>
          </Col>
          <Col xs={12} md={3}>
            <RightContainer/>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            Footer
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
