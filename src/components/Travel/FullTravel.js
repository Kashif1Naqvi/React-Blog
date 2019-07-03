import React, { Component } from 'react'

class FullTravel extends Component {
  render() {
      const { image } = this.props.article
      return (
        <div className="mt-5 pt-5" >
          <a href="/travel" > Back</a>
          <img src={image}  alt="data show"/>
        </div>
      )
    
  }
}
export default FullTravel
