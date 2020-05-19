// vim: ft=javascriptreact

import React, { Component } from 'react';

export default class UserItem extends Component {
  render() {
    const { avatar_url, login, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img
          src={avatar_url}
          alt="profile"
          className="round-img"
          style={{ width: '60px' }}
        />
        <h1>{login}</h1>
        <div>
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark btn-sm my-1"
          >
            More
          </a>
        </div>
      </div>
    );
  }
}
