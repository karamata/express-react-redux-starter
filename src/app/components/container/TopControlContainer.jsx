import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './TopControlContainer.scss';

class TopControlContainer extends React.Component {
  render() {
    return (
        <div style={{paddingTop: '15px', paddingBottom: '15px'}} className="col-xs-12 col-md-12">
            <div className="heading">
                <img src="static/edinnova-logo-blue-blue.1024x1024.png" className="img-responsive pull-right"/>
                <div className="inside" style={{paddingTop: '10px', float: 'right'}}>
                    <p><img src="static/edinnova-logo-text.png" className="img-responsive"/></p>
                    <ul className="list-inline">
                        <li><a href="#"><img src="static/question-icon.png"/></a></li>
                        <li><a href="#"><img src="static/switch-icon.png"/></a></li>
                        <li><a href="#"><img src="static/play-icon.png"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default TopControlContainer;
