import React from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';

const App =()=>{
  return (
    <React.Fragment>
      {/* I am writing Cart component here at the above of all other component but it doesn't matter ,because under  the Cart component there
      is the Modal Component under which we are using React portals to render it all above the component or body */}
      <Cart></Cart>
      <Header></Header>
      <Meals></Meals>
    </React.Fragment>
  )
}

export default App;