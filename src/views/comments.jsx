import React, { Component } from 'react';

import getUrl from './../utils/https';

class Comment extends Component {
  constructor() {
    super();

    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    fetch(getUrl('item/' + this.props.id + '.json'))
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        });
      });
  }

  render() {
    return (
      <div className="comment">
        <h3>{this.state.data.by}</h3>
        <div
          className="commentmain"
          dangerouslySetInnerHTML={{ __html: this.state.data.text }}
        />
        {this.state.data.kids && this.state.data.kids.length > 0 && (
          <div className="commentDescents">
            {this.state.data.kids.map(id => (
              <Comment id={id} key={id} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Comment;
