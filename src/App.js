import React, { useState } from 'react'
import {data} from './components/mock/mock'
import Navbar from './components/Navbar'
import Todo from './components/Todos'

const App = () => {
  const [state, setState] = useState(data);

  const onDelete = (id)=>{
    let res = state.filter((value)=>value.id !== id)
    setState(res)
  }
  return (
    <div>
        <Navbar state ={state}/>
        <Todo state ={state} onDelete ={onDelete}/>
    </div>
  )
}

export default App
    