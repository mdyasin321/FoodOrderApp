import React from 'react';
const CartContext=React.createContext({
  
    cartItems:[],
    totalPrice:0,
    addCartItemsHandler:()=>{}
});


export default CartContext;