import React from 'react';

import MealsSummary from "./MealsSummary";
import AvailaibleMeals from "./AvailaibleMeals";

const Meals=(props)=>{
   return(
    <React.Fragment>
        <MealsSummary></MealsSummary>
        {/* <AvailaibleMeals cartHandler={props.passCartHandler}></AvailaibleMeals> */}
        <AvailaibleMeals ></AvailaibleMeals>
    </React.Fragment>
   )
}
export default Meals;