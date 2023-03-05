import React ,{useReducer} from 'react';
import CartContext from "./Cart-Context";

const defaultCartState={

    items:[],
    totalAmount:0
  
  }
  
  const cartReducer=(prevState,action)=>{
       if(action.type==='AddItem'){
       const updatedAmount=(action.item.price*action.item.amount) + prevState.totalAmount;
     // const updatedItem=[action.item,...prevState.items];

     let updatedItem;

      let existingItemIndex= prevState.items.findIndex((element)=>{
        return element.id===action.item.id
      })
      let existingItem=prevState.items[existingItemIndex];
      let itemsArray=[...prevState.items];

      if(existingItem!=null){
  
        itemsArray[existingItemIndex]={
          ...existingItem,
          amount:existingItem.amount+action.item.amount//this will override the amount value for this particular item
     

        }
        updatedItem=itemsArray;

      }
      else{
        updatedItem=[action.item,...prevState.items];
                          //OR
        // updatedItem  =prevState.items.concat(action.item);  
      }

      return {
        items:updatedItem,
        totalAmount:updatedAmount
      
      }
          
   
     
       }
       //Remove Item
       if(action.type==='RemoveItem'){
        let updatedAmount;
        let existingItemIndex= prevState.items.findIndex((element)=>{
          return element.id===action.id
        })
        let existingItem=prevState.items[existingItemIndex];

        let updatedItem=[...prevState.items];
        updatedAmount= prevState.totalAmount-existingItem.price;

        if(existingItem.amount>1){
        updatedItem[existingItemIndex]={
          ...existingItem,
          amount:existingItem.amount-1
        }
       
      }
      else if(existingItem.amount===1){
        updatedItem.splice(existingItemIndex,1);
       
      }

    

        return {
          items:updatedItem,
          totalAmount:updatedAmount
        
        }

       }

      

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

      //  const deleteCartItemHandler=(id)=>{
      //    let deletingItemIndex=
      //  }


      const deleteCartItemsHandler=(id)=>{
        dispatchedCartAction({type:'RemoveItem', id:id}); 
      }

       const dummyContextValue={
        cartItems:cartState.items,
        totalPrice:cartState.totalAmount,
        addCartItemsHandler:addCartItemsHandler,
        deleteCartItem:deleteCartItemsHandler
       }



return (
    <CartContext.Provider value={dummyContextValue}>
        {props.children}
    </CartContext.Provider>

)

}

export default CartProvider;