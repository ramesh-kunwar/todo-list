import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);
  function onFinished(todo, isFinished) {
    const updatedList = list.map((t) => {
      if (t.id === todo.id) {
        t.finished = isFinished;
      }
      return t;
    });

    setList(updatedList);
  }

  function onDelete(todo) {
    const updatedList = list.filter((t) => t.id != todo.id);
    setList(updatedList);
  }

  function onEdit(todo, todoText) {
    const updatedList = list.map((t) => {
      if (t.id === todo.id) {
        t.title = todoText;
      }
      return t;
    });

    setList(updatedList);
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
              todoData={todo.title}
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
