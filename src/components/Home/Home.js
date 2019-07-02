import React from 'react'
import { homeObj } from './homeObj'
import DataList from './DataList'
const  Home = () => {
    const objList = homeObj.home.map((home)=><DataList  home={home} key={home.id} />)
    return (
        <div className=" pt-5 mt-5" >
            <div className="row">
                {objList}
            </div>
        </div>
    )
}

export default  Home