import React from "react";

const Read = (props) => {
   const todos = props.todos;




const render = todos.map((todo) => {
    return <li key={todo.id}>{todo.title}</li>;
  });

  return (
    <div>
      <h1>Pending tasks</h1>
      <ol>{render}</ol>
    </div>
  );
};

export default Read;
