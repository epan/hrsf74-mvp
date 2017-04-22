import React from 'react';
import ListItem from './ListItem';

const List = ({name, items, handleListInputSubmit}) => {
  return (
    <div>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item, index) => {
          return <ListItem title={item} key={index}/>;
        })}
      </ol>
      <form method="post">
        <input 
          id={`input${name}`} 
          type="text" 
          onFocus={handleListInputSubmit}
        />
      </form>
    </div>
  );
};

export default List;
