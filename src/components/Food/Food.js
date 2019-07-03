import React,{Component} from 'react'
import { foodObj } from './foodObj'
import FoodList from './FoodList'
import FullFood from  './FullFood'
class Food extends Component{
  constructor(props){
    super(props)
    this.state = {
      foodData : {}
    }
  }
  
  handleFood = (food) => {
    this.setState({
      foodData:food
    })
  }
  render(){
    const food = foodObj.food.map((food)=><FoodList path={this.props.location.pathname} food={food} article = {(food) => {this.handleFood(food)}}  key={food.id} />) 
    return (
      <div className="mt-5 pt-5"> 
        <div className="row">
          {
            ( Object.keys( this.state.foodData ).length > 0  ) ? <FullFood article = {this.state.foodData} /> : food
          }
        </div>
      </div>
    )
  }
}

export default Food