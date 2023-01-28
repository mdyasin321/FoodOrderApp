
import React from 'react';
import classes from './MealItem.module.css';
import MealItemForm from '../MealItemForm/MealItemForm';

const MealItem=(props)=>{

    let price=`$${props.price.toFixed(2)}`;
    return (
        <li>
            <div className={classes.mealItem}>
              <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
              </div>
              <div>
                <MealItemForm id={props.id}></MealItemForm>
              </div>
            </div>
            
        </li>
    )
}

export default MealItem;