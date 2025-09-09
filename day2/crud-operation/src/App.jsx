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
    <div>
      <Create todos={todos} setTodos= {setTodos}/>
      <Read todos={todos} setTodos= {setTodos}/>
      
    </div>
  )
}

export default App