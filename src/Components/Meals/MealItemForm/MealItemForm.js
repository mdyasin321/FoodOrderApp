import React from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm=(props)=>{
    return (
        <form className={classes.form}>
            <Input label='Amount'
             input={{id:'amount'+props.id, type:'number', step:'1', min:'1' ,max:'5'}}></Input>
            <button>+Add</button>
        </form>
    )
}

export default MealItemForm;