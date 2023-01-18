import React, { useContext, useEffect, useState } from 'react'
import FoodContext from '../../context';
import "./Menu.css";

const Menu = () => {
  const ctx = useContext(FoodContext);
  return (
    <div className='menu'>
      <div className='user'>
        <p>user</p>
      </div>
      <div className='cart'>
        <p>cart</p>
        <span className='badge'>{ctx.count}</span>
      </div>
    </div>
  )
}

export default Menu
