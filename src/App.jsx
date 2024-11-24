import { useDispatch } from "react-redux";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { bindActionCreators } from "redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  todoFinished,
} from "./actions/todoActions";
const App = () => {
  const dispatch = useDispatch();
  const actions = bindActionCreators(
    { addTodo, deleteTodo, editTodo, todoFinished },
    dispatch,
  );

  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
        todoFinished={actions.todoFinished}
      />
    </>
  );
};

export default App;
