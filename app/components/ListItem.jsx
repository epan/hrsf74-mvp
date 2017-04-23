import React from 'react';

const ListItem = ({title, id, handleItemDelete}) => {
  return (
    <li 
      className="list-item" 
      onClick={handleItemDelete}
      data-id={id}
    >
      {title}
    </li>
  );
};

export default ListItem;
