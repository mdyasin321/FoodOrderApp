import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =()=>{
    return (
        <Modal>
           
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>7673</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}
export default Cart;