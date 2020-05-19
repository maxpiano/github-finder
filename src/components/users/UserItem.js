// vim: ft=javascriptreact

import React, { Component } from 'react';

export default class UserItem extends Component {
  state = {
    id: 1,
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github.com/mojombo',
  };

  render() {
    const { avatar_url, login, html_url } = this.state;
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
