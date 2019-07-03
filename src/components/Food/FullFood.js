import React from 'react'
const FullFood =(props) =>{
    const {image} = props.article
    return(
      <div className="pt-5 mt-5" >
          <a href="/foodDrink">Back</a>
          <img src={image} alt="avatar"/>
      </div>
    )
}

export default FullFood