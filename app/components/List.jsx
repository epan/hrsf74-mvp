import React from 'react';
import ListItem from './ListItem';

const List = ({name, items, handleChange}) => {
// TODO: Put form in separate component
  return (
    <div>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item, index) => {
          return <ListItem title={item} key={index}/>;
        })}
      </ol>
        <input 
          id={`input${name}`}
          type="text" 
          onChange={handleChange}
        />
    </div>
  );
};

export default List;
