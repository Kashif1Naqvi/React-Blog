import React,{Component} from 'react'
import { homeObj } from './homeObj'
import DataList from './DataList'
import FullArticle from './FullArticle'
class  Home extends Component{
  constructor(props){
    super(props)
    this.state ={
      datalist: {} 
    }
  }

  handleData = (data) => {
    this.setState({
      datalist:data
    })
  }

  render(){
    const objList = homeObj.home.map((home)=><DataList path={this.props.location.pathname} article={(home)=>this.handleData(home)} home={home} key={home.id} />)
    return (
      <div className=" pt-5 mt-5" >
        <div className="row">
          {
            (Object.keys(this.state.datalist).length > 0) ? <FullArticle article={this.state.datalist} /> : objList
          }
        </div>
      </div>
    )
  }
}

export default  Home