import React from 'react'
import { hostelObj } from './hostelObj'
import HostelList from './HostelList'
const Hostel =()=> {
  const hostel = hostelObj.hostel.map((hostel)=><HostelList hostel={hostel} key={hostel.id}  />)
  return (
    <div className="mt-5 pt-5" >
      <div className="row">
        {hostel}
      </div>
    </div>
  )
}

export default Hostel