import React from 'react'
import Food from './Food'
import "./Main.css"

const data = [
    {
        id:"m1",
        name:"Salsa",
        title:"lorem ipsdunmd adawda wdwadawfs evasbadbarf",
    },
    {
        id:"m2",
        name:"Salsa2",
        title:"lorem ipsdunmd adawda wdwadawfs evasbadbarf",
    },
    {
        id:"m3",
        name:"Salsa3",
        title:"lorem ipsdunmd adawda wdwadawfs evasbadbarf",
    },
    {
        id:"m4",
        name:"Salsa4",
        title:"lorem ipsdunmd adawda wdwadawfs evasbadbarf",
    },
    {
        id:"m5",
        name:"Salsa5",
        title:"lorem ipsdunmd adawda wdwadawfs evasbadbarf",
    }
]
const Main = () => {
  return (
    <div className='foods'>
        {
            data.map(el=>{
                return(
                    <Food key={el.id} el={el}/>
                )
            })
        }
    </div>
  )
}

export default Main
