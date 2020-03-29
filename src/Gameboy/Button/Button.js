import React, { useState } from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    button,
    onClick
  } = props;

  const [ buttonDown, setButtonDown ] = useState(false);

  const handleButtonDown = () => {
    setButtonDown(true);
    if (onClick) { onClick(); }
  }

  const handleButtonUp = () => {
    setButtonDown(false);
  }
  return (
    <div
      className={`button-base ${buttonDown ? 'button-pressed' : 'button-up' }`}
      onMouseDown={() => handleButtonDown()}
      onMouseUp={() => handleButtonUp()}
    >
    {button}
    </div>
  );
}

export default Button;
