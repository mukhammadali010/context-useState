import React, { useReducer } from "react";
import FoodContext from ".";

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    default:
      return state;
  }
};

const FoodContextProvider = (props) => {
  const [counterState, dispatch] = useReducer(reducer, initialState);

  const value = {
    count: counterState,
    addFood: () => {
      dispatch({ type: "ADD" });
    },
  };

  return (
    <FoodContext.Provider value={value}>{props.children}</FoodContext.Provider>
  );
};

export default FoodContextProvider;
