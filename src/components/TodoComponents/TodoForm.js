import React from 'react';
import './Todo.css';

const TodoForm = props => {
  return(
    <div>
      <form>
        <input type="text" placeholder="...todo" onChange={props.changeHandler} onSubmit={props.submitHandler} value={props.value} />
        <button onClick={props.submitHandler}>Add Todo</button>
        <button onClick={props.clearHandler}>Clear Completed</button>

        {/* Stretch Problem - Search Functionality */}
        {/* <h2 for="list-search">Search the Todo List:</h2>
        <input type="search" id="list-search" name="q" placeholder="Search todo list..." />
        <button>Search</button> */}

      </form>
    </div>
  )
}

export default TodoForm;