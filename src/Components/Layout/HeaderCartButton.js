import React ,{useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/Cart-Context';
const HeaderCartButton =(props)=>{

    const ctx= useContext(CartContext);
    //here instead of using forloop we are useing reduce method for finding totalcartItems which is equal to quantity(amount) of each item
    const numberOfCartItems= ctx.cartItems.reduce((prevValue,currentValue)=>{
        return (
            prevValue+currentValue.amount
        )
    },0)
    return(
        <button className={classes.button}  onClick={props.onPress}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;