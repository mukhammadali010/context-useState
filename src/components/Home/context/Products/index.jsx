import React, { createContext, useReducer } from "react";
import { data } from "../../../utils/data.js";

export let ProductsContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return { ...state, cart: [...state.cart, action.payload.value] };
    }
    case "DELETE-CART": {
      let res = state.cart.filter((value) => value.id !== action.payload.id);
      return { ...state, cart: res };
    }
    case "INC": {
      let res = state.cart.map((value) =>
        value.id === action.payload.id
          ? { ...value, count: value.count + 1 }
          : value
      );
      return { ...state, cart: res };
    }
    case "DEC": {
        let res = state.cart.map((value) =>
          value.id === action.payload.id && value.count > 1
            ? { ...value, count: value.count - 1 }
            : value
        );
        return { ...state, cart: res };
      
    }
    default:
      return state;
  }
};

const ProductsContainer = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : { product: data, cart: [] });
  localStorage.setItem('state' , JSON.stringify(state))
  return (
    <ProductsContext.Provider value={[state, dispatch]}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContainer;