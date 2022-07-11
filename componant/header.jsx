import { useRouter } from "next/router";
import React, { useContext } from "react";
import { CardHome } from "./cardHome";
import { CartDetail } from "./cartDetail";
import {useState} from "react"
import { cartContext } from "../pages/context";
import Style from "../styles/header.module.scss"

export const Header = () => {
  const {cart} = useContext(cartContext)
  return (
    <div style={{backgroundColor:"red"}} className={Style.herderMainDiv}>
      <a href="/">
        <h2>home </h2>
      </a>
      <a href="./singleCard">
        <h2>SingleCard {cart.length } </h2>
      </a>
    </div>
  );
};
