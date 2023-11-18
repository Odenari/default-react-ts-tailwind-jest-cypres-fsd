import '../global.scss';
import Logo from '../shared/Logo';
import React from 'react';

export const App: React.FC = () => {
  return (
    <>
      <Logo />
      <h1 id="test-block">Hello Nomads</h1>
    </>
  );
};
