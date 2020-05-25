// vim: ft=javascriptreact
import React, { Component } from 'react';

export default class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    return <div>User</div>;
  }
}
