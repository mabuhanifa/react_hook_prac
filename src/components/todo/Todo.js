import React, { useEffect, useState } from "react";

const Todo = () => {
  useEffect(() => {
    if (localStorage.getItem("localTasks")) {
      const storedList = JSON.parse(localStorage.getItem("localTasks"));
      setTodos(storedList);
    }
  }, []);
  const [todo, setTodo] = useState();

  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if (todo) {
      const newTodo = { id: new Date().getTime().toString(), title: todo };
      setTodos([...todos, newTodo]);
      localStorage.setItem("localTasks", JSON.stringify([...todos, newTodo]));
      setTodo("");
    }
  };
  const clear = () => {
    setTodos([]);
    localStorage.removeItem("localTasks");
  };
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo && todo} style={{ padding: "10px" }}
        />{" "}
        <button onClick={addTodo}  style={{ padding: "10px",margin: "10px" }}>Add</button>
        <button onClick={clear}  style={{ padding: "10px" }}>Clear</button>
      </div>
      <div
        style={{
          margin: "10px",
          padding: "10px",
          border: "1px solid lightGray",
        }}
      >
        {todos &&
          todos.map((todo) => {
            return (
              <ul
                key={todo.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "1px solid lightGray",
                }}
              >
                <li>
                  <h2>{todo.title}</h2>
                </li>
                <li>
                  <small style={{ color: "gray" }}>{Date(todo.id)}</small>
                </li>
              </ul>
            );
          })}
      </div>
    </>
  );
};

export default Todo;
