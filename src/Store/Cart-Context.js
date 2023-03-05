import React from 'react';
const CartContext=React.createContext({
  
    cartItems:[],
    totalPrice:0,
    addCartItemsHandler:()=>{},
    deleteCartItem:()=>{}
});


export default CartContext;