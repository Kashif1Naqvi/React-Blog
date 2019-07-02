import React, { Component } from 'react'
import { BrowserRouter as R,Route,Link } from 'react-router-dom'
import './style.css'
class App extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  closeNav =()=> {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  render(){
    return (
      <R>
        <div className="container-fluid" >
          <div id="mySidenav" className="sidenav">
          <a href={e => e.preventDefault() } class="closebtn" onClick={this.closeNav}>&times;</a>
            <div className="row">
                <div className="col">
                    <Link className="nav-item nav-link" >Home</Link>
                    <Link className="nav-item nav-link" >Travel</Link>
                    <Link className="nav-item nav-link" >Food & Drink</Link>
                    <Link className="nav-item nav-link" >Style</Link>
                    <Link className="nav-item nav-link" >Hostel</Link>
                    <Link className="nav-item nav-link" >Diary</Link>
                    <Link className="nav-item nav-link" >About</Link>
                    <Link className="nav-item nav-link" >Contact</Link>
                </div>
                <div className="col">
                  
                    <Link>c</Link>
                  
                  <li>
                    <Link>c</Link>
                  </li>
                  <li>
                    <Link>c</Link>
                  </li>
                  <li>
                    <Link>c</Link>
                  </li>
                  <li>
                    <Link>c</Link>
                  </li>
                </div>
            </div>
          </div>

        <div id="main">
        <span style={{fontSize:"30px",cursor:"pointer"}} onClick={this.openNav} >&#9776;</span>
        </div>
          
        </div>
      </R>
    )
  }
}
export default  App