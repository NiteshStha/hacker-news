import React, { Component } from 'react';

import Comment from './comments';
import cancel from '../images/cancel.png';

class Story extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.location.state.data
    });
  }

  handleCancelButton = event => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div className="commentBg" style={{ position: 'absolute' }}>
        <div className="commentBlock">
          <div className="cancel-btn clearfix" style={{ marginBottom: 20 }}>
            <div style={{ float: 'left' }}>
              <h2 style={{ marginBottom: 15 }}>{this.state.data.title}</h2>
              <span style={{ fontSize: 16 }}>Comments</span>
            </div>
            <img
              src={cancel}
              style={{ float: 'right' }}
              alt="Exit Button"
              onClick={this.handleCancelButton}
            />
          </div>
          {this.state.data.kids && this.state.data.kids.length > 0 && (
            <div>
              {this.state.data.kids.map(kid => (
                <Comment key={kid} id={kid} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Story;
