import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";

function TodoList({ editTodo, deleteTodo, todoFinished }) {
  const list = useSelector((state) => state.todo);
  function onFinished(todo, isFinished) {
    todoFinished(todo, isFinished);
  }

  function onDelete(todo) {
    console.log(todo.id, " todo");
    deleteTodo(todo);
  }

  function onEdit(todo, todoText) {
    editTodo(todo, todoText);
  }

  return (
    <>
      {list.length > 0 &&
        list.map((todo) => {
          console.log(todo);
          return (
            <Todo
              key={todo.id}
              isFinished={todo.finished}
              todoData={todo.todoData}
              changeFinished={(isFinished) => onFinished(todo, isFinished)}
              onDelete={() => onDelete(todo)}
              onEdit={(todoText) => onEdit(todo, todoText)}
            />
          );
        })}
    </>
  );
}

export default TodoList;
