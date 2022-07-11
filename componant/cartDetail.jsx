import React, { useContext } from "react";
import { cartContext } from "../pages/context";
import { CardHome } from "./cardHome";
export const CartDetail = () => {
  const {cart,setCart} = useContext(cartContext)
  console.log("cartDetail",cart);
  return <div>
  {cart.map((item,index)=>{
    return <CardHome item={item} cart={cart} setCart={setCart} key={index+"cartDetail"}/>
  })}
  </div>;
};
