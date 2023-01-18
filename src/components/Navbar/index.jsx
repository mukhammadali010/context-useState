import React, { useContext } from "react";
import { Container } from "./style";
import { FrontEnd } from "../../context/Frontend.js";
const Navbar = () => {
  const [state, setState] = useContext(FrontEnd);
  console.log(state);
  return <Container>Navbar</Container>;
};

export default Navbar;
