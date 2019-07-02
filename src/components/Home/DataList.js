import React from 'react'
const DataList =(props)=> {
  const { image ,date, about , category } = props.home
  return (
    <div className="col col-sm-3 col-md-3 col-xl-3 col-lg-3 pt-5 mt-5" >
      <img src={image}  alt="avatar" className="image-rounded   mt-5 pt-3 " width="100%" height="80%"  />
      <p className="text-center pt-3">{date}</p>
      <h4 className="text-center  pt-3" > {about}</h4>
      <p className="text-center  pt-3">__</p>
      <p className="text-center pt-4 mt-4" >{category}</p>
    </div>
  )
}
export default DataList