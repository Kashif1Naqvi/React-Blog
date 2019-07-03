import React from 'react'

const FullArticle = (props) =>{
  const { image } = props.article
  return (
    <div className="pt-5 mt-5" >
        <img src={image} alt=""/>
    </div>
  )
}
export default  FullArticle