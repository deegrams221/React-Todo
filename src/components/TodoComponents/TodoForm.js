import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return(
    <div>
      <form>
        <input type="text" placeholder="...todo" onChange={props.changeHandler} onSubmit={props.submitHandler} value={props.value} />
        <button onClick={props.submitHandler}>Add Todo</button>
        <button onClick={props.clearHandler}>Clear Completed</button>
      </form>
    </div>
  )
}

export default TodoForm;