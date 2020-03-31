import React, { useState } from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    button,
    onClick,
    round = false,
    height = '60px',
    width = '60px'
  } = props;

  const [ buttonDown, setButtonDown ] = useState(false);

  const styles = {
    borderRadius: round? '50%' : '6px',
    height,
    width
  }

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
      style={styles}
      onMouseDown={() => handleButtonDown()}
      onMouseUp={() => handleButtonUp()}
    >
    {button}
    </div>
  );
}

export default Button;
