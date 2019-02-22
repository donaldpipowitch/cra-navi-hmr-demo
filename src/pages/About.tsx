import React, { FC } from 'react';
import { mount, route } from 'navi';
import Helmet from 'react-helmet';

const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About me</title>
      </Helmet>

      <h1>About me</h1>
      <p>This is the about page.</p>
    </>
  );
};

export default mount({
  '/': route({
    getView() {
      return <About />;
    }
  })
});
