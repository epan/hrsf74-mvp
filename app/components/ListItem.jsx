import React from 'react';

const ListItem = ({title, id, handleItemDelete}) => {
  return (
    <li 
      className="list-item" 
      onClick={() => { handleItemDelete(id); }}
    >
      {title}
    </li>
  );
};

export default ListItem;
