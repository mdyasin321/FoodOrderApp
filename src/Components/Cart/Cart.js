import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =(props)=>{
    return (
        <Modal onPress={props.onCloseCart}>
           
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>7673</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}
export default Cart;