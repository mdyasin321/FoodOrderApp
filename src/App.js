import React ,{useState, useReducer} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
//import { getValue } from '@testing-library/user-event/dist/utils';

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

const App =()=>{
  const [showInCart,setShowInCart]=useState(false);

   const[cartState,dispatchedCartAction]= useReducer(cartReducer, defaultCartState); 

//  const [cartItems,setCartItems]= useState([]);
//  const [totalAmount,setTotalAmount] =useState(0);

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


//  const addTotalAmountHandler=()=>{
//   const updatedTotalAmount=totalAmount+(cartItems.price*cartItems.amount);

//   setTotalAmount(updatedTotalAmount);
//  }

  const showCartHandler=()=>{
    setShowInCart(true);
  }
  const hideCartHandler=()=>{
    setShowInCart(false);
  }
  return (
    <React.Fragment>
      {/* I am writing Cart component here at the above of all other component but it doesn't matter ,because under  the Cart component there
      is the Modal Component under which we are using React portals to render it all above the component or body */}
      {showInCart===true && <Cart cartItemsAdded={cartState.items} onCloseCart={hideCartHandler}  amountInTotal={cartState.totalAmount}></Cart>}
      <Header onShowCart={showCartHandler} itemsInCart={cartState.items}></Header>
      <Meals passCartHandler={addCartItemsHandler}></Meals>
    </React.Fragment>
  )
}

export default App;