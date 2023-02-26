import React from 'react';
import Input from '../../UI/Input';
import { useRef } from 'react';
import classes from './MealItemForm.module.css';


const MealItemForm=(props)=>{
    const amountInputRef =useRef();

  const submitHandler=(event)=>{
     event.preventDefault();

     const enteredAmount=amountInputRef.current.value;
     const enteredAmountInNumber=+ enteredAmount;
     props.amtpassing(enteredAmountInNumber);

      //here we are resetting the value of amount to null, so that the user can now set any other amount
     amountInputRef.current.value=null;

  };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            {/* here I am passing the ref because ref can only be used for inbuilt input element and not for custom / userdefined element */}
            {/* refs are used in place of onChangeHandler where everytime user strikes any alphabet and we called the setstate method
            to save the each striked alphabet. But, by using refs we can wait until the user strikes all the alphabets and then we can
            use that value as we required */}
            <Input label='Amount'
              ref={amountInputRef}
             input={{id:'amount'+props.id, type:'number', step:'1', min:'1' ,max:'5'}}></Input>
            <button>+Add</button>
        </form>
    )
}

export default MealItemForm;