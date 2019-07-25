import React, { Component } from 'react';

import getUrl from '../utils/https';
import ListItem from './listItem';

class List extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      data: [],
      pageNo: 0,
      pageListItems: 8
    };
  }

  componentDidMount() {
    fetch(getUrl('topstories.json'))
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: [...response],
          isLoading: false
        });
      });
  }

  handlePageChange = pageCheck => {
    {
      pageCheck === 1 &&
        this.setState({
          pageNo: this.state.pageNo + pageCheck
        });
    }
    {
      pageCheck === -1 &&
        this.state.pageNo > 0 &&
        this.setState({
          pageNo: this.state.pageNo + pageCheck
        });
    }
  };

  render() {
    return (
      <div className="list">
        {this.state.data
          .slice(
            this.state.pageNo * this.state.pageListItems,
            (this.state.pageNo + 1) * this.state.pageListItems
          )
          .map(item => (
            <ListItem key={item} id={item} />
          ))}
        {!this.state.isLoading && (
          <div
            style={{ textAlign: 'center', marginTop: 15, paddingBottom: 15 }}
          >
            <button
              className="pageBtn"
              style={{ marginRight: 5 }}
              onClick={() => this.handlePageChange(-1)}
            >
              Prev
            </button>
            <button
              className="pageBtn"
              style={{
                marginLeft: 5
              }}
              onClick={() => this.handlePageChange(1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default List;
