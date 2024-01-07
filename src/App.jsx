import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo } from "./Redux/todos";

function App() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  const dispatch = useDispatch();

  function handleAddToTodo() {
    let newTodo = {
      id: Date.now(),
      title: "Task 1",
      completed: false,
    };

    dispatch(addTodo(newTodo));
  }

  return (
    <div>
      <h1>Hello World</h1>
      {todos.map((todo) => (
        <div
          key={todo.id}
          onClick={() => dispatch(updateTodo(todo.id))}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {" "}
          <h1>{todo.title}</h1>{" "}
        </div>
      ))}
      <button onClick={handleAddToTodo}>+===</button>
    </div>
  );
}

export default App;
