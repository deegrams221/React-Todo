import React from 'react';

const Todo = props => {
  return (
    <li onClick={() => props.handler(props.toDo.id)} style={props.toDo.completed ? {textDecoration: 'line-through'} : null}>
      {props.toDo.task}
    </li>
  )
}

export default Todo;