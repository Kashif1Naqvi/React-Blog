import React from 'react'
const Footer =()=> {
  return (
    <div className="container pt-5 mt-5 ">
      <h1 className="text-center pb-3 " >Subscribe</h1>
      <p className="text-center" >Get updates on my travels</p>
      <div className="row">
        <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 "></div>
        <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 ">
        <input className="ml-5" size="20"  type="text"/>
      <button className="btn btn-dark ml-1 " >Sign Up</button><br/>
      <p className="pb-3" ></p>
      <a className="mt-4 ml-5 pl-5 "   href="http://instagram.com/squarespace"> <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/df/1e/2f/df1e2f1d-903b-864a-d606-4b0c61b9988d/Prod-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/246x0w.jpg" alt="Instragram" width="25px" />  </a>
      <a className="mt-4 " href="https://twitter.com/squarespace"> <img src="https://image.flaticon.com/icons/png/512/23/23931.png" alt="Twitter" width="25px" /> </a>
        </div>
        <div className="col col-sm-4 col-md-4 col-xl-4 col-lg-4 "></div>
      </div>
      
    </div>
  )
}
export default Footer