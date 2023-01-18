import React, { useContext, useState } from "react";
import { FrontEnd } from "../../context/Frontend";
import { Backend } from "../../context/Backend";
const Todo = () => {
  const [state, setState] = useContext(FrontEnd);
  const [backend, setBackend] = useContext(Backend);
  console.log(state, "Todos");

  const onDel = (id) => {
    let resf = state.filter((value) => value.id !== id);
    setState(resf);
  };
  const onDelete = (id) => {
    let res = backend.filter((value) => value.id !== id);
    setBackend(res);
  };

  return (
    <div>
      <h1>Todo: {state.length}</h1>
      {state.map((value) => {
        return (
          <div key={value.id}>
            <h1>{value.title}</h1>
            <p>{value.text}</p>
            <button onClick={()=>onDel(value.id)}>delete</button>
          </div>
        );
      })}

      {backend.map((value) => {
        return (
          <div key={value.id}>
            <h1>{value.title}</h1>
            <p>{value.text}</p>
            <button onClick={() => onDelete(value.id)}>delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
