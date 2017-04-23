import React from 'react';
import ListItem from './ListItem';

const List = ({name, items, handleSubmit, handleItemDelete}) => {
  return (
    <div className={`list-container ${name} col`}>
      <h2>{`${name}`}</h2>
      <ol>
        {items.map((item) => {
          return <ListItem 
            title={item.text} 
            key={item._id}
            id={item._id}
            handleItemDelete={handleItemDelete}
          />;
        })}
      </ol>
      <form 
        onSubmit={(e) => {
          e.preventDefault(); 
          let inputField = document.getElementById(`input${name}`);
          handleSubmit(inputField.value);
          inputField.value = '';
        }}
        autoComplete="off"
      >
        <div className="form-group">
          <input 
            id={`input${name}`}
            className="form-control"
            type="text" 
            placeholder={`Type ${name}, hit Return`}
          />
        </div>
      </form>
    </div>
  );
};

export default List;
