import React from 'react';
import EightBitBtn from '../components/EightBitBtn';

const Header = ({ isActive, btnHandler, text }) => (
  <div className={isActive ? 'row h-100' : 'row'}>
    <div className={isActive ? 'col my-auto' : ' top-bar float-left'}>
      <div className="header">
        {text.split('').map((ltr, i) => (
          <span key={i} className={isActive ? 'active' : ''}>
            {ltr}
          </span>
        ))}
      </div>
      {isActive && (
        <div className="col">
          <EightBitBtn clickHandler={btnHandler}>start</EightBitBtn>
        </div>
      )}
    </div>
  </div>
);

export default Header;
