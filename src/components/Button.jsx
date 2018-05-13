import React from 'react';
import '../styles/Button.css';

export default (props) => {
  const className = `btn ${props.className}`
  const { type = 'button', onClick, children } = props;

  return (
    <button 
      className={className} 
      type={type} 
      onClick={onClick}
    >
    {children}
    </button>
  );
}