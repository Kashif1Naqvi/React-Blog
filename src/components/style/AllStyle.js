import React from 'react'

const  AllStyle = (props) => {
  const {image } = props.style
  return(
    <div className="pt-5 mt-5">
        <a href="/style" className="btn btn-danger" >Back</a>
        <img src={image} alt="avatar" />
    </div>
  )
}

export default AllStyle