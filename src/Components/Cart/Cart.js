import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart =(props)=>{
    const totalAmt=`$${props.amountInTotal}`;
    console.log(props.cartItemsAdded );
    const items=props.cartItemsAdded.map((element)=>{
        return (
            <CartItem key={element.key}  name={element.name} amount={element.amount} price={element.price}></CartItem>
        )
    });

    
    return (
        <Modal onPress={props.onCloseCart}>
            {items}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmt}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}
export default Cart;