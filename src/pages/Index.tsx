import React, { FC } from 'react';
import { mount, route } from 'navi';
import Helmet from 'react-helmet';

const Index: FC = () => {
  return (
    <>
      <Helmet>
        <title>My blog</title>
      </Helmet>

      <h1>My blog</h1>
      <p>This is my home page.</p>
    </>
  );
};

export default mount({
  '/': route({
    getView() {
      return <Index />;
    }
  })
});
