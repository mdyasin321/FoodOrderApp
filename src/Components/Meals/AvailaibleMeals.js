import Card from "../UI/Card";
import classes from './AvailaibleMeals.module.css';
import MealItem from "./MealItem/MealItem";
import MealItemForm from "./MealItemForm/MealItemForm";


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const AvailaibleMeals =(props)=>{
   let meals= DUMMY_MEALS.map((element)=>{
        return (
            <MealItem key={element.id}
                      id={element.id}
                      name={element.name}
                      description={element.description}
                      price={element.price}
                      pass2={props.pass1}></MealItem>
        )
    })

    return (
        <div className={classes.meals}>
       <Card>
            <ul>{meals}</ul>
           
        </Card>
        </div>
    )
  }

  export default AvailaibleMeals;