import React from 'react';
import logo from '../assets/Logo.svg';

const Logo: React.FC = () => {
  return (
    <div className="flex justify-between items-center max-w-[180px] h-[46px] mt-[25px] ml-[25px] ">
      <img src={logo} alt="Logo Heal Flow corp." />
      <h2 className="text-purple-main">Heal Flow</h2>
    </div>
  );
};

export default Logo;
