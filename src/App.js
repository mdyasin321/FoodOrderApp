import React ,{useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const App =()=>{
  const [showInCart,setShowInCart]=useState(false);
  const [totalAmount,setTotal]=useState(0);

  const showCartHandler=()=>{
    setShowInCart(true);
  }
  const hideCartHandler=()=>{
    setShowInCart(false);
  }

  const addTotalAmount=(amt)=>{
        setTotal((prevState)=>{
          let total=amt+prevState;
          return (
            total
          )
        })

      
  }

  return (
    <React.Fragment>
      {/* I am writing Cart component here at the above of all other component but it doesn't matter ,because under  the Cart component there
      is the Modal Component under which we are using React portals to render it all above the component or body */}
      {showInCart==true && <Cart  onCloseCart={hideCartHandler}  amountPresent={totalAmount}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals pass={addTotalAmount}></Meals>
    </React.Fragment>
  )
}

export default App;