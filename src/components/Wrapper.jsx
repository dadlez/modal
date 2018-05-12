import React from 'react';
import './../styles/Wrapper.css';

export default (props) => {
  const onClick = (e) => {
    props.onClick();
  }
  
  return <div className='Wrapper' onClick={onClick}>{props.children}</div>
}