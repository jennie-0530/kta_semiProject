import React from 'react';

type props = {
  text: string;
  styles: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button = ({ text, styles, onClick, disabled }: props) => {
  return (
    <button onClick={onClick} className={styles} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
