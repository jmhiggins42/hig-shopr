import React from 'react';
import './css/buttons.css';

const EightBitBtn = ({ type = 'button', classType = 'main', children }) => (
  <button type={type} className={`eightbit-${classType}`}>
    {children}
  </button>
);

export default EightBitBtn;
