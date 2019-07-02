import React from 'react'
import { foodObj } from   './foodObj'
import FoodList from './FoodList'
const Food = () => {
    console.log("obj",foodObj)
    const food = foodObj.food.map((food)=><FoodList  food={food} key={food.id} />) 
    return (
        <div className="mt-5 pt-5  "> 
            <div className="row">
                {food}
            </div>
        </div>
    )
}
export default Food