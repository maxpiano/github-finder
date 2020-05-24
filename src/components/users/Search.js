// vim: ft=javascriptreact
import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
        <form className="form">
          <input type="text" name="text" placeholder="Search Users..." id="" />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}
