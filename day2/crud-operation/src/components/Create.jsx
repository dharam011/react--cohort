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
    <div className="  create flex text-center gap-1 border-2 rounded-md p-1 bg-amber-600 flex-col">
      {" "}
      <h1 className=" m-1 text-white text-2xl bg-green-500 rounded-md p-1">Create tasks</h1>
      <form onSubmit={submitHandeler}>
        <input className=" border-2 rounded-md p-1 bg-zinc-50"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="title"
        />
        <br />
        <br />

        <button className=" border-2 rounded-md p-1 bg-green-500" type="submit">create todo</button>
      </form>
    </div>
  );
};

export default Create;
