import React ,{useState, useReducer} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from './Store/CartProvider.js';


// const defaultCartState={

//   items:[],
//   totalAmount:0

// }

// const cartReducer=(prevState,action)=>{
//      if(action.type==='AddItem'){
//      const updatedItem=[action.item,...prevState.items];
//                    //OR
//   //  const updatedItem  =prevState.items.concat(action.item);         
//       const updatedAmount=(action.item.price*action.item.amount) + prevState.totalAmount;
//       return {
//         items:updatedItem,
//         totalAmount:updatedAmount
       
//       }
//      };
//      return defaultCartState;
// };

const App =()=>{
  const [showInCart,setShowInCart]=useState(false);

  //  const[cartState,dispatchedCartAction]= useReducer(cartReducer, defaultCartState); 



//  const addCartItemsHandler=(item)=>{


                                           
//                                             //OR(USE OF useREDUCER)

//   dispatchedCartAction({type:'AddItem', item:item});                              
//  }



  const showCartHandler=()=>{
    setShowInCart(true);
  }
  const hideCartHandler=()=>{
    setShowInCart(false);
  }
  return (
    <React.Fragment>
      <CartProvider>

      {/* I am writing Cart component here at the above of all other component but it doesn't matter ,because under  the Cart component there
      is the Modal Component under which we are using React portals to render it all above the component or body */}
      {/* {showInCart===true && <Cart cartItemsAdded={cartState.items} onCloseCart={hideCartHandler}  amountInTotal={cartState.totalAmount}></Cart>} */}
                                   {/* //OR(using context) */}
      {showInCart===true && <Cart  onCloseCart={hideCartHandler} ></Cart>}




      {/* <Header onShowCart={showCartHandler} itemsInCart={cartState.items}></Header> */}
                                     {/* //OR(using context) */}
      <Header onShowCart={showCartHandler} ></Header>



      {/* <Meals passCartHandler={addCartItemsHandler}></Meals> */}
                       {/* //OR(using context) */}
             <Meals ></Meals>

             
      </CartProvider>
    </React.Fragment>
  )
}

export default App;