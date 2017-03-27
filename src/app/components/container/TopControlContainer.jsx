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
                        <li><a title="raise your hand to take speach" href="javascript:void(0);"><i style={{fontSize: '1.5em'}} className="fa fa-question-circle" aria-hidden="true"></i></a></li>
                        <li><a title="share your screen" href="javascript:void(0);"><i style={{fontSize: '1.5em'}} className="fa fa-object-group"></i></a></li>
                        <li><a title="play youtube video" href="javascript:void(0);"><i style={{fontSize: '1.5em'}} className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        <li><a title="play audio file" href="javascript:void(0);"><i style={{fontSize: '1.5em'}} className="fa fa-headphones" aria-hidden="true"></i></a></li>
                        <li><a title="config your setting" href="javascript:void(0);"><i style={{fontSize: '1.5em'}} className="fa fa-cogs" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default TopControlContainer;
