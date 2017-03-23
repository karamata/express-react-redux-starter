import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LeftContainer from './container/LeftContainer';
import RightContainer from './container/RightContainer';

class App extends React.Component {
  render() {
    return (
      <Grid className="class-container" fluid>
        <Row>
          <Col xs={12} md={8}>
            <Grid>
              <LeftContainer/>
            </Grid>
          </Col>
          <Col xs={12} md={4}>
            <RightContainer/>
          </Col>
        </Row>
        <Row></Row>
      </Grid>
    );
  }
}

export default App;
