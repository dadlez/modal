import React from 'react';

export default ({ list }) => {
  const isListEmpty = list.length > 0;

  return isListEmpty ?
    (
      <ul>
        {list.map((item, index) => {
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
    ) :
    null;
}