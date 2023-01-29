import React from 'react';

import MealsSummary from "./MealsSummary";
import AvailaibleMeals from "./AvailaibleMeals";

const Meals=(props)=>{
   return(
    <React.Fragment>
        <MealsSummary></MealsSummary>
        <AvailaibleMeals pass1={props.pass}></AvailaibleMeals>
    </React.Fragment>
   )
}
export default Meals;