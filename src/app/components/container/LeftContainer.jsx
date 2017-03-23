import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'

class LeftContainer extends from React.Component {
  render() {
    const currentOnLeft = this.props.currentOnLeft;
    return (
      <Grid>
        {currentOnLeft && currentOnLeft.component};
      </Grid>
    );
  }
}

export default connect(state => state.currentOnLeft)(LeftContainer);
