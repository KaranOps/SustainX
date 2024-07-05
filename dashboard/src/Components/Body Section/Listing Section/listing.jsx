import React from 'react'
import './listing.css'

// Importing images==============>
import img from '../../../Assets/plant.png'
import img2 from '../../../Assets/Profile_Img.jpg'

const listing = () => {
    return (
        <div className="listingSection">

            <div className="heading flex">
                <h1>My Listings</h1>
                <button className="btn flex">
                    See All <span className="material-symbols-outlined icon">
                        chevron_right
                    </span>
                </button>
            </div>

            <div className="secContainer flex">
                <div className="singleItem">
                    <span className="material-symbols-outlined icon">
                        favorite
                    </span>
                    <img src={img} alt="Image" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <span className="material-symbols-outlined icon">
                        favorite
                    </span>
                    <img src={img} alt="Image" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <span className="material-symbols-outlined icon">
                        favorite
                    </span>
                    <img src={img} alt="Image" />
                    <h3>Annual Vince</h3>
                </div>

                <div className="singleItem">
                    <span className="material-symbols-outlined icon">
                        favorite
                    </span>
                    <img src={img} alt="Image" />
                    <h3>Annual Vince</h3>
                </div>
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className="btn flex">
                            See All <span className="material-symbols-outlined icon">
                                chevron_right
                            </span>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <div className="cardText">
                            <span>14.556 Plant sold <br />
                                <small>
                                    21 Sellers <span className="date">7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>


                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className="btn flex">
                            See All <span className="material-symbols-outlined icon">
                                chevron_right
                            </span>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                            <img src={img2} alt="" />
                        </div>
                        <div className="cardText">
                            <span>25,656 Plant sold <br />
                                <small>
                                    31 Sellers <span className="date">31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default listing
