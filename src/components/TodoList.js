import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <>
      <h2>Child Component</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {!todo.completed && (
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
