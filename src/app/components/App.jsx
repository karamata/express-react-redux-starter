import React, { PropTypes } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Col xs={12} md={9}>
            <Button bsStyle="success">Success</Button>
          </Col>
          <Col xs={12} md={3}>
            <Button bsStyle="primary">Primary</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
