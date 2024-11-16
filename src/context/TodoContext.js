import { createContext } from "react";

const todoContext = createContext(null); // helps to create a parent component that will pass the state to all its children

export default todoContext;
