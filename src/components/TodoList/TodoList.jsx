import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";
import TodoDispatchContext from "../../context/TodoDispatchContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);
  console.log(list, " list");
  const { dispatch } = useContext(TodoDispatchContext);
  function onFinished(todo, isFinished) {
    console.log(todo, " todo");
    dispatch({ type: "finish_todo", payload: { todo, isFinished } });
  }

  function onDelete(todo) {
    dispatch({ type: "delete_todo", payload: { todo } });
  }

  function onEdit(todo, todoText) {
    dispatch({ type: "edit_todo", payload: { todo, todoText } });
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
