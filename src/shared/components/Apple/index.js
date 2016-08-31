import React from 'react';
import Helmet from 'react-helmet';

export default () => {
  return <div>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      titleTemplate="Apple Job - %s"
      defaultTitle="Apple Job"
      meta={[
        { name: 'description', content: 'This is apple job site' },
      ]}
    />
    <h1>THIS IS APPLE</h1>
  </div>
}
