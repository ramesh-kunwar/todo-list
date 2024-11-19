import React, { useContext, useState } from "react";
import TodoDispatchContext from "../../context/TodoDispatchContext";
function AddTodo() {
  const [inputText, setInputText] = useState("");
  const { dispatch } = useContext(TodoDispatchContext);
  return (
    <>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Add Todo"
      />

      <button
        onClick={() => {
          dispatch({ type: "add_todo", payload: { todoText: inputText } });
          setInputText("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
