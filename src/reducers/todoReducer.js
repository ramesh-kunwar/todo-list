function todoReducer(state = [], action) {
  switch (action.type) {
    case "add_todo": {
      let todoText = action.payload.todoText;
      return [
        ...state,
        { id: new Date().getTime(), todoData: todoText, finished: false },
      ];
    }

    case "edit_todo": {
      let { todo, todoText } = action.payload;
      return state.map((t) =>
        t.id === todo.id ? { ...t, todoData: todoText } : t,
      );
    }

    case "delete_todo": {
      let { todo } = action.payload;
      return state.filter((t) => t.id !== todo.id);
    }

    case "finish_todo": {
      let { todo, isFinished } = action.payload;
      return state.map((t) =>
        t.id === todo.id ? { ...t, finished: isFinished } : t,
      );
    }

    default:
      return state;
  }
}

export default todoReducer;
