import React from 'react';
import ListItem from './ListItem';

const List = ({name, items}) => {
  return (
    <div>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item, index) => {
          return <ListItem title={item} key={index}/>;
        })}
      </ol>
      <form method="post">
        <input id={`input${name}`} type="text"/>
      </form>
    </div>
  );
};

export default List;
