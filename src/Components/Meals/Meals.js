import React from 'react';

import MealsSummary from "./MealsSummary";
import AvailaibleMeals from "./AvailaibleMeals";

const Meals=()=>{
   return(
    <React.Fragment>
        <MealsSummary></MealsSummary>
        <AvailaibleMeals></AvailaibleMeals>
    </React.Fragment>
   )
}
export default Meals;