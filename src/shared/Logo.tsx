import React from 'react';
import logo from '../assets/Logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="flex gap-4 items-center h-[46px] ">
      <img src={logo} alt="Logo Heal Flow corp." />
      <h2 className="text-purple-main">Heal Flow</h2>
    </div>
  );
};

export default Logo;
