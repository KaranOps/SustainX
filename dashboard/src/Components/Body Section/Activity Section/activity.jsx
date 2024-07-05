import React from 'react'
import './activity.css'

//Import Images =========>
import img from '../../../Assets/Profile_Img.jpg'

const activity = () => {
    return (
        <div className="activitySection">
            <div className="heading flex">
                <h1>Resent Activity</h1>
                <button className="btn flex">
                    See All
                    <span className="material-symbols-outlined icon">
                        chevron_right
                    </span>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer" />
                    <div className="customerDetails">
                        <span className="name">Rajiv Kumar</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer" />
                    <div className="customerDetails">
                        <span className="name">Rajiv Kumar</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer" />
                    <div className="customerDetails">
                        <span className="name">Rajiv Kumar</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={img} alt="Customer" />
                    <div className="customerDetails">
                        <span className="name">Rajiv Kumar</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>
            </div>
        </div>
    )
}

export default activity
