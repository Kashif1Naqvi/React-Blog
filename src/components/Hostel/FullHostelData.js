import React from 'react'

const FullHostelData = (props)=> {
  const { image } = props.hostel
  return (
    <div className="pt-5 mt-5" >
        <a href="/hostel" className="btn btn-danger" >Back</a>
        <img src={image} alt="avatar" />
    </div>
  )
}
export default FullHostelData