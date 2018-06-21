import React from 'react';
import './css/buttons.css';

const EightBitBtn = ({
  type = 'button',
  classType = 'main',
  classNames = '',
  clickHandler,
  children
}) => (
  <button
    type={type}
    className={[`eightbit-${classType}`].concat(classNames.split(' ')).join(' ')}
    onClick={clickHandler}
  >
    {children}
  </button>
);

export default EightBitBtn;
