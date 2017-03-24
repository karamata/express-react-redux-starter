import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class LeftContainer extends React.Component {
  render() {
    const currentOnLeft = this.props.currentOnLeft;
    console.log(currentOnLeft);
    return (
      {currentOnLeft}
    );
  }
}

const defaultLeftContainer = () => {
  return (
    <div style={{background: '#000'}}>LeftContainer</div>
  );
}

const mapStateToProps = state => {
  return {
    currentOnLeft: state.currentOnLeft ? state.currentOnLeft : defaultLeftContainer()
  };
};

export default connect(mapStateToProps)(LeftContainer);
