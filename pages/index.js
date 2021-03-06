import Head from "next/head";
import { BrowserRouter, Route } from "react-router-dom";
import { Header, CardHome, CartDetail } from "../componant";
import styles from "../styles/Home.module.css";
import CardData from "../json/cardData.json";
import { useState } from "react";
import { useSelector } from "react-redux";
import Style from "../styles/cardHome.module.scss"

export default function Home() {
  const [productData] = useState(CardData);
  const getData = useSelector((state) => state.CartReducer.cart);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={Style.homeCardDiv}>
        {productData.map((item, index) => {
          return <CardHome item={item} key={index + "passDataToCardHome"} />;
        })}
      </div>
    </div>
  );
}
