import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
        {props.item}
        <spam className="icons">
        <i className="fa-solid fa-trash-can icon-delete"
        onClick={e=>{
            props.deleteItem(props.Index)
        }}></i>
        </spam>
    </li>

  )
}

export default TodoList