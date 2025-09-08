import React from 'react'

const Read = (props) => {
    console.log(props);
    const users = props.users;
    const setUsers = props.setUsers;
  
    const renderUser =users.map((users,index)=>{
    return (
    <li key ={index}>{users.name}</li>
  )
})

  return (
    <div>
        <h1>user data</h1>
        <ol>{renderUser}</ol>
    </div>
  )
}

export default Read