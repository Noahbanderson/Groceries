import React from "react";


const List = ({items, title, todoClick, editClick, deleteClick }) => {
  
  const styles = {
    todo: { cursor: 'pointer' },
    complete: { color: 'grey', textDecoration: 'line-through' },
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map( item => 
          <div key={item.id}>
              <li 
                key={item.id} 
                style={ item.retrieved ? { ...styles.todo, ...styles.complete} : styles.todo}
                onClick={ () => todoClick(item.id) }
                >
                {item.iname}
              </li>
              <button onClick={ () => editClick(item.id)}>Edit</button>
              <button onClick={ () => deleteClick(item.id)}>Delete</button>
          </div>
          )
        }
      </ul>
    </div>
  )
}

export default List;





