import React ,{useReducer} from 'react';
import CartContext from "./Cart-Context";

const defaultCartState={

    items:[],
    totalAmount:0
  
  }
  
  const cartReducer=(prevState,action)=>{
       if(action.type==='AddItem'){
       const updatedItem=[action.item,...prevState.items];
                     //OR
    //  const updatedItem  =prevState.items.concat(action.item);         
        const updatedAmount=(action.item.price*action.item.amount) + prevState.totalAmount;
        return {
          items:updatedItem,
          totalAmount:updatedAmount
         
        }
       };
       return defaultCartState;
  };
  


const CartProvider=(props)=>{

    const[cartState,dispatchedCartAction]= useReducer(cartReducer, defaultCartState); 

    const addCartItemsHandler=(item)=>{

        // setCartItems(item);
        // addTotalAmountHandler();
        // here we have to use reducer function because in addTotalAmountHandler() method, it depends upon the cartItems State and we know that
        // cartItems state is not updated till the whole function i.e addCartItemsHandler() method got executed, so we will get wrong value 
        // in the updated total amount in the addTotalAmountHandler() method.
        // Here we will use reducer function, because we know that when one state or method depends on another state and the both the dependent
        // values(item,updatedTotalAmount in addTotalAmountHandler() ) are present in one method only;
                                                 
                                                  //OR(USE OF useREDUCER)
      
        dispatchedCartAction({type:'AddItem', item:item});                              
       }

       const dummyContextValue={
        cartItems:cartState.items,
        totalPrice:cartState.totalAmount,
        addCartItemsHandler:addCartItemsHandler
       }



return (
    <CartContext.Provider value={dummyContextValue}>
        {props.children}
    </CartContext.Provider>

)

}

export default CartProvider;