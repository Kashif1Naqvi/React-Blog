import React from 'react'
import AllData from './AllData'
import AllPosts from './AllPosts'
const FullTravel = (props) =>{
  const { image,date,about,category ,fullData,Related_Posts } = props.article

  const posts = Related_Posts.map((post,index)=><AllPosts {...post} key={index}  />)

  const data = fullData.map((data,index)=><AllData  {...data} key={index}  />)
  return (
    <div className="container pt-5 mt-5" >
      <div className="row">
        <div className="col col-sm-1 com-md-1 pt-5 mt-5 col-lg-1 col-xl-1 ">
          <div className="mt-5 pt-5" >
          <div className="mt-5 pt-5" >
          <div className="mt-5 pt-5" >
              <a href="/" className="btn btn-danger" >Back</a>
            </div>
            </div>
          </div>
        </div>
        <div className="col col-sm-11 com-md-11 col-lg-11 col-xl-11 ">
          <img src={image} className="img-rounded" width="100%" height="1099px" alt=""/>
          <p className="text-center pt-2 mt-2 text-muted" >{date}</p>
          <h1 className="display-3 text-center" >{about}</h1>
          <p className="pt-2 mt-2 text-center" >__</p>
          <p className="pt-3 mt-3 text-center " >{category}</p>
        </div>
      </div>
      <div className="row">
          <div className="col col-sm-8 com-md-8 col-lg-8 col-xl-8">
              <h1 className=" pt-4" >Sailing here was a surreal experience. The light fog snaked its way through the valley, but still let the sun warm our backs.</h1>
              <p>Aenean lacinia bibendum nulla sed consectetur. Donec id elit non mi.Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio.</p>
              <p className="pt-3" >Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p className="pt-3" >Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Curabitur blandit tempus porttitor.</p>
          </div>
          <div className="col col-sm-4 com-md-4 col-lg-4 col-xl-4">
                <img src="https://static1.squarespace.com/static/images/57580c9cba67a84e48990453/100w?format=100w" className="rounded-circle pb-1 mb-1 " alt=""/><br/>
                <a className="text-danger pt-3 pb-5 mt-3 mb-5" href="/">Skye Landvik</a>
                <p className="pb-5 mb-5" >Born and raised in Stockholm. Dublin-based software developer. Trend-spotting and tasting the world by plane, boat, or bus.</p>
                <a href="/" className="text-danger pb-5 mb-5 " >Website</a>
                <h1>Subscribe</h1>
                <p className="pt-2 mt-2" >Get updates on my travels.</p>
                <input type="text" placeholder="Enter Email"  className="form-control pb-2 mb-2  " />
                <button className="btn btn-default  text-white bg-dark btn-large pl-4 pr-4  pb-3 pt-3 " >Sign Up</button>
          </div>
      </div>
        <div className="pt-5 mt-5" >
          {data}  
        </div>
        
        <div className="row pt-5 mt-5" >
          {posts}  
        </div>
    </div>
  )
}
export default  FullTravel