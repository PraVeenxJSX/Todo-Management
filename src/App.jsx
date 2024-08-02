import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      const newTodos = [...todos, task];
      setTodos(newTodos);
      setTask('');
    }
  };

  const deleteHandler = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="container">
        <h2>Todo Management</h2>
        <form onSubmit={submithandler} className="form">
          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={changeHandler}
            className="input"
          />
          <button type="submit" className="button">Add</button>
        </form>
        <hr />
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li key={index} className="todo-item">
              {todo}
              <button
                onClick={() => deleteHandler(index)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
