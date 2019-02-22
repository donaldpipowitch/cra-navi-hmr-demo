import React, { FC } from 'react';
import { Link } from 'react-navi';
import { useLifetime } from '../hooks/useLifetime';

export const Header: FC = () => {
  const seconds = useLifetime();
  return (
    <>
      <header>
        <Link href="/">Home</Link>
        {' | '}
        <Link href="/about">About</Link>
        {' | '}
        Up and running for {seconds}s.
      </header>

      <hr />
    </>
  );
};
