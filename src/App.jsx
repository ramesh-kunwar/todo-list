import { useReducer, useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext";

const App = () => {
  // use reducer takes first argument as reducer function and second argument as initial state;
  // it gives back two values, state and dispatch function;
  const [list, dispatch] = useReducer(todoReducer, []); // reducer function and initial state
  return (
    <div>
      <TodoContext.Provider value={{ list }}>
        <TodoDispatchContext.Provider value={{ dispatch }}>
          <AddTodo />
          <TodoList />
        </TodoDispatchContext.Provider>
      </TodoContext.Provider>
    </div>
  );
};

export default App;
