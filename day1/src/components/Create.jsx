import React, { useState } from 'react'


const Create = (props) => {
    console.log(props)
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState(18)
    const submitHandeler =(e)=>{
    console.log(fullname,age);
    e.preventDefault();
    const newUser ={fullname,age};
    console.log(newUser)   // database , api , backend me use krte h yhi data
    }
    
  return (
    <div>  
         <form onSubmit={submitHandeler}>
  
<input onChange={(e)=>setFullname(e.target.value)} value= {fullname} type="text" placeholder="full name" />
<input onChange={(e)=>setAge(e.target.value)}  value ={age} type="number"  placeholder="age"/>
<input type="submit" />
    </form>
    </div>
  )
}

export default Create