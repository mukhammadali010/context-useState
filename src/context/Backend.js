import React , {createContext, useState}  from 'react'
import {teacher} from '../components/mock/mock'
export let Backend = createContext();


const BackendFunc = ({children}) => {
    const [backend , setBackend] = useState(teacher);
  return (
    <Backend.Provider value={[backend , setBackend]}> 
      {children}
    </Backend.Provider>
  )
}

export default BackendFunc
