import React, { useState } from 'react'

import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  const [todos, setTodos] = useState([
      {
        id: 1,
        title: "kuch to kr",
        isCompleted: false,
      },
    ]);



 

  return (
    <div className='flex p-10 border-2 m-2 gap-2 w-full h-92'>
      <Create todos={todos} setTodos= {setTodos}/>
      <Read todos={todos} setTodos= {setTodos}/>
      
    </div>
  )
}

export default App