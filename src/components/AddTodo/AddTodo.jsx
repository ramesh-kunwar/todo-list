import { useState } from "react";
function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");
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
          addTodo(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
