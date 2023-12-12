import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './todoSlice';

import './TodoList.css';

function TodoList() {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: task, completed: false }));
      setTask(''); //to clear the input field
    }
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Add a new task"
        value={task} //Binds the value of the input to the 'task' state variable. This means that the content of the input field will be controlled by the 'task' state.
        onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
