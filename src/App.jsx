import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "./Redux/todos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");

  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch();

  function handleAddToTodo(e) {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: todo,
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setTodo("");
  }

  return (
    <div className="container p-4">
      <h1>Todo App</h1>
      <form
        className="d-flex justify-content-evenly mb-4"
        onSubmit={handleAddToTodo}
      >
        <input
          onChange={(e) => setTodo(e.target.value)}
          className="form-control w-50 mt-4"
          type="search"
          value={todo}
          placeholder="Add Todo"
        ></input>
        <button type="submit" className="btn btn-primary mt-4 mb-3">
          Add Todo
        </button>
      </form>
      <div className="container-sm mx-auto  ">
        {todos.map((todo) => (
          <div
            className="d-flex justify-content-between mb-3"
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {" "}
            <p>{todo.title}</p>
            <div className="actions mr-2">
              <button
                className="btn btn-primary"
                onClick={() => dispatch(updateTodo(todo.id))}
              >
                Done
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteTodo(todo))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
