import React,{Component} from 'react'
import { hostelObj } from './hostelObj'
import HostelList from './HostelList'
import FullHostelData from './FullHostelData';

class Hostel extends Component {
  constructor(props){
    super(props)
    this.state = {
      hostelData : {}
    }
  }
  handleHostel = (hostel) => {
    this.setState({
      hostelData : hostel
    })
  }

  render(){
    const hostel = hostelObj.hostel.map((hostel)=><HostelList hostel={hostel} path={this.props.location.pathname}  key={hostel.id} handleHostel={(hostel)=>this.handleHostel(hostel)}  />)
    return (
      <div className="mt-5 pt-5" >
        <div className="row">
          {  ( Object.keys(this.state.hostelData).length > 0) ? <FullHostelData hostel={this.state.hostelData}  /> :hostel  }
        </div>
      </div>
    )
  }
}

export default Hostel