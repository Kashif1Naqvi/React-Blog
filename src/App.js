import React, { Component } from 'react'
import { BrowserRouter as R,Route,Link } from 'react-router-dom'
import Home from './components/Home/Home';
import Travel from './components/Travel/Travel';
import Food from './components/Food/Food';
import Style from './components/style/Style';
import Hostel from './components/Hostel/Hostel';
import About from './components/About/About';
import './style.css'
import Footer from './Footer';
import Contact from './components/Contact/Contact';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      width:"0px"
    }
  }

  handleNav = () => {
    this.setState({
      width:"50%"
    })
  }

  closeNav = () => {
    this.setState({
      width:"0px"
    })
  }
  
  render(){
    const width = this.state.width
    return (
      <R>
        <div className="container-fluid" >
          <nav className="navbar navbar-expand fixed-top mt-5 pt-5" >
            <ul className="navbar-nav" >
              <div id="main">
                  <span style={{fontSize:"30px",cursor:"pointer"}}  onClick={this.handleNav} >&#9776;</span>
              </div>
            </ul>
            <ul className="navbar-nav navbar-logo mx-auto" >
              <Link  to="/" className="nav-item nav-link text-dark" style={{fontSize:"20px"}} ><u className="p-2" >Skye</u></Link>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="http://instagram.com/squarespace" target="_blank" rel="noopener noreferrer" className="nav-link">
                  <img width="20px" src="https://image.flaticon.com/icons/png/128/174/174855.png" alt="instragram"/>
                </a>
              </li>
              <li className="nav-item">
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/squarespace" className="nav-link">
                  <img src="https://image.flaticon.com/icons/svg/174/174876.svg" alt="twitter" width="30px" /> 
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search" >
                  <img src="https://www.flaticon.com/premium-icon/icons/svg/1872/1872535.svg" alt="search" width="30px" />
                </Link>
              </li>
            </ul>    
          </nav>
          <div style={{width}} className="sidenav  ">
            <div className="row">
              <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4">
                <div className="pt-5 mt-5">
                  <p className="pt-5" ></p>
                  <a href="/" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center" >Home</a>
                  <Link to="/travel" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >Travel</Link>
                  <Link to="/foodDrink" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >Food & Drink</Link>
                  <Link to="/style" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >Style</Link>
                  <Link to="/hostel" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >Hostel</Link>
                  <Link to="/about" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >About</Link>
                  <Link to="/contact" style={{fontSize:"35px"}} className=" text-danger  nav-item nav-link text-dark pr-5 font-weight-bold text-center  " >Contact</Link>
                </div>
              </div>
              <div className="col col-sm-8 col-md-8 col-xl-8 col-xl-8">
                <div className="p-3 m-3  text-center " >
                  <figure className="figure">
                    <img className="figure-image rounded-circle "  src="https://static1.squarespace.com/static/55491642e4b0cb0b033d590e/t/56ba424320c6479e7f780c8f/1456168353372/?format=300w" alt=""/>
                  </figure>
                  <h1 className="mb-4 font-weight-bold" >Hi</h1>
                  <p  className="mb-3 " >Welcome to my blog. I document my adventures in travel, style, and food. Hope you have a nice stay!</p>
                  <a href="http://instagram.com/squarespace"> <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/df/1e/2f/df1e2f1d-903b-864a-d606-4b0c61b9988d/Prod-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" alt="Instragram" width="25px" />  </a>
                  <a href="https://twitter.com/squarespace"> <img src="https://image.flaticon.com/icons/png/512/23/23931.png" alt="Twitter" width="25px" /> </a>
                </div>
              </div>
            </div>
            <p className="closebtn"  onClick={this.closeNav}>&times;</p>
          </div>
          <Route  exact path="/" component={Home} />
          <Route  path="/travel" component={Travel} />
          <Route  path="/foodDrink" component={Food} />
          <Route  path="/style" component={Style} />
          <Route  path="/hostel" component={Hostel} />
          <Route  path="/about"  component={About} /> 
          <Route  path="/contact" component={Contact} />
           <span className="pb-5 mb-5" ></span>
           <br/><br/><br/><hr />
          <Footer />
        </div>
      </R>
    )
  }
}
export default  App