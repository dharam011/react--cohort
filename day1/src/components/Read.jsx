import React from 'react'

const Read = (props) => {
  const users= props.users;
  // const setUsers = props.setUsers;
  // console.log(props.users[0]);
  const render= users.map((user, index) => {
    return  <li key={index} > {index+1} {user.name} and he is  {user.age}</li>
    
    
  })


  return (
    <div>
      <h1>user data </h1>
      <li>{render}</li>
    </div>
  )
}

export default Read
