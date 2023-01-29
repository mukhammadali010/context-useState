import React from "react";
import { Container, ImgWrapper } from "./style";
const Card = (props) => {
  return (

      <Container>
        <ImgWrapper>
          <img src={props.data.image} alt="" />
        </ImgWrapper>
        <h3>{props.data.title}</h3>
        <p>Rs :{props.data.price}</p>
        <button onClick={()=>props.dispatch({type:'add' , payload: {value:{...props.data , count: 1} , id: props.data.id}})}>Add to Cart {props.data?.id}</button>
      </Container>
  );
};

export default Card;
