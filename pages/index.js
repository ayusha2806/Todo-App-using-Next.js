import React, { useState } from 'react';
import styles from './index.module.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { task: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div className={styles.todoApp}>
      <h1>Todo App</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo..."
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className={styles.todoList}>
        {todos.map((todo, index) => (
          <li key={index} className={todo.done ? styles.done : ''}>
            {todo.task}
            <div>
              <button onClick={() => handleToggleTodo(index)}>
                {todo.done ? 'Marked as unread' : 'Marked as read'}
              </button>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
