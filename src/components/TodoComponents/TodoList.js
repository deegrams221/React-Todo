import React from 'react';
import Todo from './Todo';
import './Todo.css';

const List = props => {
  return (
    <ul>
      {props.list.map(toDo => {
        return (
          <Todo handler={props.handler} toDo={toDo} key={Math.random()} />
        )
      })}
    </ul>
  )
}

export default List;