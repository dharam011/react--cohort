import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
const [users, setUsers] = useState([
  {name:"dharam", age : 20},
  {name:"daksh", age : 22},
  {name:"harsh", age : 24},
  {name:"nammo", age : 20},
])

  return (
    <div>
<Create />
<Read users={users} setUsers={setUsers}/>

    </div>
  )
}

export default App// import { useState } from "react";
// import Create from "./components/Create";
// import Read from "./components/Read";

// const App = () => {
//   const [users, setUsers] = useState([
//     { name: "dharam", age: 20 },
//     { name: "daksh", age: 22 },
//     { name: "Harsh", age: 24 },
//     { name: " nammo", age: 20 },
//   ]);

//   return (
//     <>
//       <Create />
//       <Read users={users} setUsers={setUsers} />
//     </>
//   );
// };

// export default App;

// import React, { useState } from 'react'

// const App = () => {

// const [user , setUser] = useState("dharam");

// const changeUser= ()=>{
// const newUser= prompt("enter new user");
// console.log("hello")
// setUser(newUser)

// }
//   return (
//    <>
//    <h1>{user}</h1>
//    <button onClick={changeUser}>click to update</button>
//    </>
//   )
// }

// export default App

// // //import { useState } from "react"

// // const App = () => {

// //   const [user , setUser] =  useState("dharam");

// // const changeUser = () => {
// //   const newUser= prompt(" enter the  new user name : ");
// //   setUser(newUser);

// // }
// // console.log(user);

// //   return (
// //     <>
// //     <h1>{user}</h1>
// //     <button onClick={changeUser}>Click to change the user name </button>

// //     </>
// //   )
// // }

// // export default App
