import React, { FC, Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { View } from 'react-navi';
import { Header } from './components/Header';

const App: FC = () => (
  <>
    <Header />
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </>
);

export default hot(module)(App);
