import React from 'react';
import ListItem from './ListItem';

const List = ({name, items, handleSubmit}) => {
// TODO: Put form in separate component
  return (
    <div>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item, index) => {
          return <ListItem title={item} key={index}/>;
        })}
      </ol>
      <form>
        <input 
          id={`input${name}`} 
          type="text" 
          onChange={handleSubmit}
        />
      </form>
    </div>
  );
};

export default List;
