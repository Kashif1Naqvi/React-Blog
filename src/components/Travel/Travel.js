import React,{Component} from 'react'
import TravelerList from './TravlerList'
import { travelObj }  from './travelObj'
import FullTravel from './FullTravel';


class Travel extends Component {
  constructor(props){
    super(props)
    this.state = {
      travelobj : {}
    }
    }
  handleTravel = (travel) => {
    this.setState({
      travelobj:travel
    })
  } 
  render() {
    const travelList = travelObj.travel.map((travel)=><TravelerList path={this.props.location.pathname} travel={travel} key={travel.id} article={(travel)=>this.handleTravel(travel) } />)
    return (
      <div className="pt-5 mt-5" >
        <div className="row" >
          {
            ( Object.keys(this.state.travelobj).length > 0) ? <FullTravel article={this.state.travelobj}  /> : travelList 
          }
        </div>
      </div>
    )  
  }
}
export default Travel


