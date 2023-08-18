import React, { createContext, useEffect, useState } from "react";
import Loader from "./Loader";

import TodoList from "./Todo/TodoList";

const AddTodo = React.lazy(() => import("./Todo/AddTodo"));

export const Context = createContext();

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        });
      });
  }, []);

  const toggleTodo = (id) => {
    const toggled = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(toggled);
  };

  const removeTodo = (id) => {
    const removed = todos.filter((todo) => todo.id !== id);
    setTodos(removed);
  };

  const addTodo = (title) => {
    const added = todos.concat([
      {
        title,
        id: Date.now(),
        completed: false,
      },
    ]);
    setTodos(added);
  };
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>What should father to do?</h1>
        <React.Suspense fallback={<Loader />}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
