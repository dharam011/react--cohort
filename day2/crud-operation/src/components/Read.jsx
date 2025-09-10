import React from "react";

const Read = (props) => {
  const todos = props.todos;

  const setTodos = props.setTodos;

  const render = todos.map((todo) => {
    return ( 
      <div className="relative">
      <li className=" font-bold text-l text-zinc-900 bg-cyan-500 border-2 text-black-900 border-black p-2 rounded-md m-2" key={todo.id}>
        {todo.title}
        <span className="  absolute right-5 bottom-1.5 w-xs text-red-950-500 cursor-pointer bg-red-400 p-1 rounded-md"
          onClick={() => {
            deleteHandeler(todo.id);
          }}
        >
          {" "}
          | |Delete
        </span>
      </li></div>
    );
  });
  const deleteHandeler = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="p-3 relative bg-gray-600 w-screen rounded-md  flex-col ">
      <h1 className="text-white text-2xl bg-green-500 rounded-md p-1 text-center">Pending Tasks</h1>
      <ol>{render}</ol>
      <button className="absolute right-1.5 bottom-1.5 bg-red-500 p-1 rounded-md m-1 w-xs" onClick={() => setTodos([])}>Clear</button>
    </div>
  );
};

export default Read;
