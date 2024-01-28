import { createContext, useContext } from "react";
const TodoContext = createContext({
  todos: [
    // we have array in context with object as values or items in it
    {
      id: 1,
      todo: "title",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updatedTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});
export { TodoContext };
const TodoProvider = TodoContext.Provider;
export { TodoProvider };

// custom hook
const useTodo = () => {
  return useContext(TodoContext);
};

export { useTodo };
