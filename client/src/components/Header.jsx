import React from 'react';

const Header = ({ text }) => (
  <div className="row">
    <div className="col">
      {text.split('').map((ltr, i) => (
        <span key={i} className="header">
          {ltr}
        </span>
      ))}
    </div>
  </div>
);

export default Header;
