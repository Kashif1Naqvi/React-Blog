import React, { Component } from 'react'

class Comments extends Component {
  constructor(props){
    super(props)
    this.state = {
      show:false,
      input:""
    }
  }
  handleShow  = () => {
    this.setState(prev=>({
      show:!prev.show
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
       input:this.input.value
     })
     this.input.value = ""
  }

  render() {
    return (
      <div>
        <button className="text-danger btn btn-default " onClick={this.handleShow} >Leave a Commnet</button>
        {
         !this.state.show ? "":
          <form className="form">
            <div className="form-group">
              <textarea   cols="110" className="form-control" ref={(input) => { this.input = input }} rows="5"></textarea>  
              <input type="submit" onClick={this.handleSubmit} value="submit" />
            </div>
          </form>
        }
{        this.state.input ? <h1>Thank you for commenting</h1>:<p></p> 
}      </div>
    )
  }
}
export default  Comments