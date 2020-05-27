// vim: ft=javascriptreact
import React, { Fragment } from 'react';
import Users from './components/users/Users';
import Search from './components/users/Search';

const About = () => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default About;
