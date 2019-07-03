import React,{Component} from 'react'
import { styleObj } from './styleObj'
import StyleList from './StyleList'
import AllStyle from './AllStyle'
class Style extends Component {
	constructor(props){
		super(props)
		this.state ={
				styleData : {}
		}
	}

	handleStyle = (style) => {
		this.setState({
			styleData:style
		})
	}

	render(){
		const style = styleObj.style.map((style)=><StyleList path={this.props.location.pathname} style={style} handleStyle={(style)=>this.handleStyle(style)}  key={style.id}  />)
		return (
			<div className="mt-5 pt-5" >
				<div className="row" >
					{ 
						(Object.keys(this.state.styleData).length > 0 ) ? <AllStyle  style={this.state.styleData} /> : style
					}
				</div>
			</div>
		)	
	}
}

export default  Style