import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class DataList extends Component {
  handleData = (article) => {
    this.props.article(article)
  }
  render() {
    const { image ,date, about , category } = this.props.home
    return (
      <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 pt-5 mt-5" >
        <Link to={`${this.props.path}`}>
          <img src={image} onClick={()=>this.handleData(this.props.home) } alt="avatar" className="image-rounded   mt-5 pt-3 " width="100%" height="80%"  />
        </Link>
        <p className="text-center pt-3">{date}</p>
        <h4 className="text-center  pt-3" > {about}</h4>
        <p className="text-center  pt-3">__</p>
        <p className="text-center pt-4 mt-4" >{category}</p>
      </div>
    )
  }
}
export default  DataList