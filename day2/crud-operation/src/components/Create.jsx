import React from "react";
import { nanoid } from 'nanoid'
import { useState } from "react";

const Create = (props) => {
  const todos = props.todos;
  const setTodos = props.setTodos;
  

  const [title, setTitle] = useState("");

  const submitHandeler = (e) => {
    e.preventDefault();
    const NewTodo = {
      id: nanoid(),
      title: title,
      isCompleted: false,
    };

    console.log(NewTodo);

    let copyTodos = [...todos];
    copyTodos.push(NewTodo);
    setTodos(copyTodos);
    setTitle("");
  };
  return (
    <div>
      {" "}
      <h1>Create tasks</h1>
      <form onSubmit={submitHandeler}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />

        <button type="submit">create todo</button>
      </form>
    </div>
  );
};

export default Create;
