import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm=(props)=>{
    let totalAmount=0;
    const addAmount=(amount)=>{
        totalAmount=amount;
    
    }
     //addAmountInCartHandler
    const submitHandler=(event)=>{
        event.preventDefault();
      props.pass3(totalAmount);
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input label='Amount'
             input={{id:'amount'+props.id, type:'number', step:'1', min:'1' ,max:'5'} }  amountOrdered={addAmount}></Input>
            <button type='submit'>+Add</button>
        </form>
    )
}

export default MealItemForm;