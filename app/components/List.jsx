import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({name, items}) => {
  return (
    <div>
      <h2>{`${name}`}</h2>
      <ol>
        {
          items.map((item, index) => {
            return <ListItem title={item} key={index}/>;
          })
        }
      </ol>
    </div>
  );
};

export default List;
