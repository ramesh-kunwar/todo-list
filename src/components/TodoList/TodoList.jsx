import { useContext } from "react";
import Todo from "../Todo/Todo";
import TodoContext from "../../context/TodoContext";

function TodoList() {
  const { list, setList } = useContext(TodoContext);
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
              changeFinished={(isFinished) => {
                const updatedList = list.map((t) => {
                  if (t.id === todo.id) {
                    t.finished = isFinished;
                  }
                  return t;
                });

                setList(updatedList);
              }}
              onDelete={() => {
                const updatedList = list.filter((t) => t.id != todo.id);
                setList(updatedList);
              }}
              onEdit={(todoText) => {
                const updatedList = list.map((t) => {
                  if (t.id === todo.id) {
                    todo.todoData = todoText;
                  }
                  return t;
                });

                setList(updatedList);
              }}
            />
          );
        })}
    </>
  );
}

export default TodoList;
