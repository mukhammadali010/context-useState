import React, { createContext, useState } from "react";
import { data } from "../components/mock/mock";

export let FrontEnd = createContext();

const FrontEndFunc = ({ children }) => {
  const [state, setState] = useState(data);
  return (
    <FrontEnd.Provider value={[state, setState]}>
      {children}
    </FrontEnd.Provider>
  );
};

export default FrontEndFunc;
