import React from 'react'
import { styleObj } from './styleObj'
import StyleList from './StyleList'
const Style =() => {
	const style = styleObj.style.map((style)=><StyleList style={style} key={style.id}  />)
	return (
		<div className="mt-5 pt-5" >
			<div className="row" >
				{style}
			</div>
		</div>
	)
}

export default  Style