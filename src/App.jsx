import AppName from "./component/AppName";
import AddTodo from "./component/AddTodo";
import "./app.css";
import TodoItemsList from "./component/TodoItemsList";

function App() {
  const todoItems = [
    {
      name: "Buy milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to college",
      dueDate: "04/10/2023",
    },
    {
      name: "Buy Shirt",
      dueDate: "Right now",
    },
    {
      name: "Buy Vegetables",
      dueDate: "Just now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItemsList todoItems={todoItems} />
    </center>
  );
}

export default App;
