import React from 'react';

const Button = ({ message, className }) => {
  return (
    <div>
      <button className={className}>{message}</button>
    </div>
  );
};

export default Button;
