import React from 'react';

const Header = ({ text, classNames = '' }) => (
  <div className="row">
    <div className="col">
      {text.split('').map((ltr, i) => (
        <span key={i} className={['header'].concat(classNames.split(' ')).join(' ')}>
          {ltr}
        </span>
      ))}
    </div>
  </div>
);

export default Header;
