import React from 'react'
import TravelerList from './TravlerList'
import { travelObj }  from './travelObj'
const Travel =()=> {
    const travelList = travelObj.travel.map((travel)=><TravelerList  travel={travel} key={travel.id} />)
    return (
        <div className="pt-5 mt-5" >
            <div className="row" >
                    {travelList}
            </div>
        </div>
    )
}

export default Travel