import React from 'react';

export default (props) => {
  console.log(props.list)
  return (
    <ul>
      {props.list.map((item, index) => {
        return (
          <li key={index}>
            {Object.keys(item).map((key, index) => (
              <div key={index}>{item[key]}</div>
            ))}
            <hr />
          </li>
        );
      })}
    </ul>
  );
}