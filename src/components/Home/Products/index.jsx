import React, { useContext} from "react";
import Card from "../../Card";
import { Container } from "./style";
import {ProductsContext} from '../context/Products'

const Products = () => {
  const [state , dispatch] = useContext(ProductsContext);

  return (
    <Container>
      {
        state.product.map((value)=>{
          return(
            <Card key={value?.id} data = {value} dispatch ={dispatch} />
            )
        })
      }
    </Container>
  );
};

export default Products;
