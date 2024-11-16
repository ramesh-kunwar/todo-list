import React, { useState } from "react";
function AddTodo({ updateList }) {
  const [inputText, setInputText] = useState("");
  return (
    <>
      <input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={() => updateList(inputText)}>Add</button>
    </>
  );
}

export default AddTodo;
