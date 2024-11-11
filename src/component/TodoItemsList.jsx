import TodoItems from "./TodoItems";
import style from "./TodoItemsList.module.css";

const TodoItemsList = ({ todoItems }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((items) => (
        <TodoItems todoName={items.name} todoDate={items.dueDate} />
      ))}
    </div>
  );
};

export default TodoItemsList;
