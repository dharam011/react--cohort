import React, { useState } from "react";

const Create = (props) => {
  
  const [fullname, setFullName] = useState("");
  const [age, setAge] = useState(18);
console.log(props);
  const submitHandeler = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser);
  };

  return (
    <div>
      <form onSubmit={submitHandeler}>
        <input
          type="text"
          placeholder="your fullname "
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="number"
          placeholder="your age"
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
