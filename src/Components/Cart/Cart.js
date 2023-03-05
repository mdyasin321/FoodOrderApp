import React ,{useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import CartContext from '../../Store/Cart-Context';

const Cart =(props)=>{
    const ctx= useContext(CartContext);
    const totalAmt=`$${ctx.totalPrice.toFixed(2)}`;

    const cartItemAddHandler=(item)=>{
        const newItem={
            ...item,
            amount:1
        }
        ctx.addCartItemsHandler(newItem);

    }
    const cartItemRemoveHandler=(id)=>{
       
      ctx.deleteCartItem(id);

    }

   
    
    const items=ctx.cartItems.map((element)=>{
        return (
            <CartItem key={element.key}  name={element.name} amount={element.amount} price={element.price}  
             onAdd={()=>{cartItemAddHandler(element)}}
             onRemove={()=>{cartItemRemoveHandler(element.id)}}></CartItem>
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