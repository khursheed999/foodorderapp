 import CartContext from "../Store/CartContext";
import {currencyFormatter } from "../util/formating";
import Button from "./UI/Button";
import { useContext } from "react";
 export default function MealItem({meal}){
const { addItem}=useContext(CartContext);
    const {id, name,price,description}=meal;


    function handleAddMealToCart(){
          addItem(meal);
          console.log(meal);
    }
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt={name}  />
            <div>
                <h3>{name}</h3>
               <p className="meal-item-price">{currencyFormatter.format(price)}</p>
               <p className="meal-item-description">{description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={handleAddMealToCart}>Add to Cart</Button>
            </p>
        </article>
    </li>
 }