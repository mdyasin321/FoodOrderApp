import React,{useState,useEffect} from 'react';
import classes from './Input.module.css';

const Input =(props)=>{

    const [amtState,setAmt]=useState('');

    useEffect(()=>{
       props.amountOrdered(+amtState);
    },[amtState])

   

    const amountChangeHandler=(event)=>{
         setAmt(event.target.value);
    }


    
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}  onChange={amountChangeHandler} />
        </div>
    )
}

export default Input; 