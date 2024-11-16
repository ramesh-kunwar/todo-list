import { useContext, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";

const App = () => {
  const [list, setList] = useState([
    { id: 1, title: "Learn React", finished: false },
    { id: 2, title: "Learn Node", finished: false },
    { id: 3, title: "Learn Express", finished: false },
  ]);
  return (
    <div>
      <TodoContext.Provider value={{ list, setList }}>
        <AddTodo
          updateList={(todo) =>
            setList([
              ...list,
              { id: list.length + 1, title: todo, finished: false },
            ])
          }
        />
        <TodoList />
      </TodoContext.Provider>
      ,
    </div>
  );
};

export default App;
