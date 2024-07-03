import React from 'react'
import './body.css'
import Top from './Top Section/top'
import Listing from './Listing Section/listing'
import Activity from './Activity Section/activity'


const Body = () => {
    return (
        <div className='mainContent'>
            <Top />
            <div className="bottom flex">
                <Listing />
                <Activity />
            </div>
        </div>
    )
}

export default Body
