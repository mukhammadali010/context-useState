import React, { useContext } from "react";
import FoodContext from "../../context";

const Food = ({el}) => {
  const ctx = useContext(FoodContext);
  const onAddBtnHandler = ()=>{
    ctx.addFood() 
  }
  return (
    <div className="food">
      <div className="food__name">
        <h2>{el.name}</h2>
        <p>{el.title}</p>
      </div>
      <div className="food__input">
        <input type="number" min="1" defaultValue={1} />
      </div>
      <div className="food__order">
        <button onClick={onAddBtnHandler}>Add</button>
      </div>
    </div>
  );
};

export default Food;
