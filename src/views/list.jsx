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
      pageListItems: 20
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
    window.scrollTo(0, 0);
    {
      pageCheck === 1 &&
        this.state.pageNo <
          this.state.data.length / this.state.pageListItems - 1 &&
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
              style={{ marginRight: 8 }}
              onClick={() => this.handlePageChange(-1)}
            >
              ⏮
            </button>
            <span style={{ fontSize: 20 }}>
              {this.state.pageNo > 0 && this.state.pageNo}
            </span>
            <span
              style={{
                fontSize: 28,
                marginLeft: 8,
                marginRight: 8,
                fontWeight: 'bold',
                color: '#0f88ad'
              }}
            >
              {this.state.pageNo + 1}
            </span>
            <span style={{ fontSize: 20 }}>
              {this.state.pageNo <
                this.state.data.length / this.state.pageListItems - 1 &&
                this.state.pageNo + 2}
            </span>
            <button
              className="pageBtn"
              style={{
                marginLeft: 8
              }}
              onClick={() => this.handlePageChange(1)}
            >
              ⏭
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default List;
