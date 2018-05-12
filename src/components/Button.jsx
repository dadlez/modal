import React from 'react';
import '../styles/Button.css';

export default (props) => {
  const className = `btn ${props.className}`

  return <button className={className} type={props.type ? props.type : 'button'} onClick={props.onClick}>pokaż modal</button>;
}