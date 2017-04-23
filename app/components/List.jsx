import React from 'react';
import ListItem from './ListItem';

const List = ({name, items, handleSubmit, handleItemDelete}) => {
  return (
    <div className={`list-container ${name}`}>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item, index) => {
          return <ListItem 
            title={item.text} 
            key={item._id}
            id={item._id}
            handleItemDelete={handleItemDelete}
          />;
        })}
      </ol>
      <form onSubmit={(e) => {
        e.preventDefault(); 
        let inputField = document.getElementById(`input${name}`);
        handleSubmit(inputField.value);
        inputField.value = '';
      }}>
        <input 
          id={`input${name}`}
          type="text" 
          placeholder={`Type ${name}, hit Return`}
        />
      </form>
    </div>
  );
};

export default List;
