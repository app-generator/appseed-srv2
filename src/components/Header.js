import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p>
        {config.subHeading} - <a href="mailto:{config.email}">{config.email}</a>
      </p>
    </header>
  );
}
