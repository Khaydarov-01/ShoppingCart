import React, { useState } from "react";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Main from "./components/Main";
import { data } from "./components/data";
import './style/style.css';

function App() {
   const {products} = data;  
   const [cartItem, setCartItem] = useState([]);

   const onAdd = (pro) => {
      const exist = cartItem.find(x => x.id === pro.id);
      if(exist){
        setCartItem(cartItem.map((x) => x.id === pro.id ? {...exist, qty: exist.qty + 1} : x));
      }else{
        setCartItem([...cartItem, {...pro, qty:1}])
      }
   }

   const onRemove = (pro) => {
       const exist = cartItem.find((x) => x.id === pro.id);
       if(exist.qty === 1) {
             setCartItem(cartItem.filter((x) => x.id !== pro.id));
       }else{
            setCartItem(cartItem.map((x) => x.id === pro.id ? {...exist, qty: exist.qty - 1} : x));
       }
   }
   
  return (
    <div className="app">
      <Header countCartItems={cartItem.length}/>
      <div className="row">
      <Main onAdd={onAdd} products={products}/>
      <Basket onAdd={onAdd} onRemove={onRemove} cartItem={cartItem}/>
      </div>
    </div>
  );
}

export default App;
