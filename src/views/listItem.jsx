import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from 'react-spinkit';

import getUrl from '../utils/https';

class ListItem extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount = () => {
    fetch(getUrl('item/' + this.props.id + '.json'))
      .then(response => response.json())
      .then(response => {
        this.setState({
          isLoading: false,
          data: response
        });
      });
  };

  render() {
    const date = new Date(this.state.data.time * 1000);
    return (
      <div className="title">
        {this.state.isLoading && <Spinner name="ball-beat" />}
        {!this.state.isLoading && (
          <>
            <Link
              to={{
                state: { data: this.state.data },
                pathname: '/story/' + this.props.id
              }}
            >
              {this.state.data.title}
            </Link>
            <div className="details">
              <span>By: {this.state.data.by}</span>
              <span>Time: {date.toDateString()}</span>
              <span>
                <a
                  href={this.state.data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </span>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default ListItem;
