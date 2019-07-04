import React,{Component} from 'react'
import Comments from './Comments';
class AllData extends Component{
  render(){
    const {image1,image2 ,image3,image4,image5,title,image7,about,socailHeading,link,image8,image9,image10,image11,tags,} = this.props
    console.log(this.props)
    return(
      <div className="row"> 
        <div className="col col-sm-9 col-md-9 col-xl-9 col-lg-9 ">
          <img  width="100%" height="auto" className="image-rounded hoverable pt-2 mt-2 "  src={image1} alt="Avatar"/>
          <img  width="100%" height="auto" className="image-rounded pt-2 mt-2 "  src={image2} alt="Avatar"/>
          <img  width="100%" height="auto" className="image-rounded pt-2 mt-2 "  src={image3} alt="Avatar"/>
          <img  width="100%" height="auto" className="image-rounded pt-2 mt-2 "  src={image4} alt="Avatar"/>
          <img  width="100%" height="auto" className="image-rounded pt-2 mt-2 "  src={image5} alt="Avatar"/>
          <h1 className="display-1 text-center pb-4 mb-4 "  style={{fontSize:"50px"}} >Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum.</h1>
          <p className="text-muted" >Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Vestibulum id ligula porta felis euismod semper. Vestibulum id ligula porta felis euismod semper. Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec id elit non mi porta gravida at eget metus.</p>
          <ul className="text-muted">
            <li>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</li>
            <li>Aenean lacinia bibendum nulla sed consectetur.</li>
            <li>Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam.</li>
            <li>Pellentesque ornare sem lacinia quam venenatis vestibulum. Etiam porta sem malesuada magna mollis euismod.</li>
          </ul>
          <p className="text-muted">Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas faucibus mollis interdum. Maecenas sed diam eget risus varius blandit sit amet non magna. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
          <p className="text-muted">Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit justo sit amet risus.</p>
          <div className="text-center" >
            {
              tags.map((tag,index)=>{return <a key={index} className="text-center text-muted"  href="/" >{tag}</a> })
            }
          </div>
          <hr />
          <Comments />
        </div>
        <div className="col col-sm-3 col-md-3 col-xl-3 col-lg-3 ">
          <h1 className="text-muted display-1 pb-1 mb-1 font-weight-bold " style={{fontSize:"30px"}} >{title}</h1>
          <img className="text-muted pb-2 mb-2 "   src={image7} width="300px" alt="Avatar"/>
          <p className="text-muted pt-2 mt-2 " >{about}</p><br/>
          <h2 className="text-muted mt-3 pt-3 display-1 " style={{fontSize:"30px"}}>{socailHeading}</h2><br/>
          <a href={link} className="text-danger pt-2 mt-2 " >@skyetravels</a>
          <img className="img-rounded pt-1 mt-1 "  src={image8} alt="Avatar" width="300px"/>
          <img className="img-rounded pt-1 mt-1 "  src={image9} alt="Avatar" width="300px"/>
          <img className="img-rounded pt-1 mt-1 "  src={image10} alt="Avatar" width="300px"/>
          <img className="img-rounded pt-1 mt-1 "  src={image11} alt="Avatar" width="300px"/>
        </div>        
      </div>
    )
  }
}
export default AllData