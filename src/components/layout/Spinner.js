// vim: ft=javascriptreact

import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{
        width: '200px',
        margin: 'autio',
        display: 'block',
      }}
    />
  </Fragment>
);

export default Spinner;
