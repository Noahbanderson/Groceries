import React from "react";

const List = ({items, title, todoClick }) => {
  
  const styles = {
    todo: { cursor: 'pointer' },
    complete: { color: 'grey', textDecoration: 'line-through' },
  };

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {items.map( item => 
            <li 
              key={item.id} 
              style={ item.retrieved ? { ...styles.todo, ...styles.complete} : styles.todo}
              onClick={ () => todoClick(item.id) }
            >
              
              {item.iname}
            </li>
          )
        }
      </ul>
    </div>
  )
}


export default List;






