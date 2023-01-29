import React ,{useState} from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const App =()=>{
  const [showInCart,setShowInCart]=useState(false);

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
      {showInCart==true && <Cart onCloseCart={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <Meals></Meals>
    </React.Fragment>
  )
}

export default App;