// vim: ft=javascriptreact

import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
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
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
