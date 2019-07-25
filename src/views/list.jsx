import React, { Component } from 'react';

import getUrl from '../utils/https';
import ListItem from './listItem';

class List extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: []
    };
  }

  componentDidMount() {
    fetch(getUrl('topstories.json'))
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: [...response].slice(0, 200),
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div className="list">
        {this.state.data.map(item => (
          <ListItem key={item} id={item} />
        ))}
      </div>
    );
  }
}

export default List;
