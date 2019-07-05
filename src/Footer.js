import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {
      input:""
    }
  }
  handleInput = (e) => {
    e.preventDefault()
    this.setState({
      input:this.input.value
    })
    this.input.value = ""
  }
  render() {
    return (
      <div className="container pt-5 mt-5 ">
        <h1 className="text-center pb-3 " >Subscribe</h1>
        <p className="text-center" >Get updates on my travels</p>
        <div className="row">
          <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 "></div>
          <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 ">
          <form onSubmit={this.handleInput} >
              <input className="ml-5" size="20"  ref={input =>this.input = input} type="text"/>
              <input className="btn btn-dark ml-1" type="submit" value="Sign Up" /><br/>
          </form>
        <h3 className="pb-3 text-center " >{this.state.input ? <p value={()=>{ setTimeout(3000) }} >Thank you for Subscribe</p>:"" }</h3>
        <a className="mt-4 ml-5 pl-5 "   href="http://instagram.com/squarespace"> <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/df/1e/2f/df1e2f1d-903b-864a-d606-4b0c61b9988d/Prod-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" alt="Instragram" width="25px" />  </a>
        <a className="mt-4 " href="https://twitter.com/squarespace"> <img src="https://image.flaticon.com/icons/png/512/23/23931.png" alt="Twitter" width="25px" /> </a>
          </div>
          <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 "></div>
        </div>
        
      </div>
    )
  }
}
