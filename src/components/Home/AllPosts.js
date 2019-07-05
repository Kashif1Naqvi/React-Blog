import React from 'react'
export default function AllPosts(props) {
  let {image,date,title  } = props
  return (
        <div className="col col-md-4 col-lg-4 col-xl-4 col-xl-4 ">
            <a href="/" >
              <img src={image} width="90%" height="50%" className="image-rounded  image-thumbnail " alt="Avatar"/>
            </a>
            <p className="text-center pt-2 mt-2 text-muted " >{date}</p>
            <h1 className="display-3 text-muted  " style={{fontSize:"30px"}}   >{title}</h1>
    </div>
  )
}
