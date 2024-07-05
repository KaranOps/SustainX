import React from 'react'
import './top.css'

/* Import Profile image */
import Profile from '../../../Assets/Profile_Img.jpg'
import img from '../../../Assets/plant.png'
import Video from '../../../Assets/Log_Video.mp4'

const top = () => {
    return (
        <div className='topSection'>
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to SustainX</h1>
                    <p>Hello Karan kumar, Welcome back</p>
                </div>

                <div className="searchBar flex">
                    <input type='text' placeholder='Search dashboard'></input>
                    <span class="material-symbols-outlined icon">
                        search
                    </span>
                </div>

                <div className="adminDiv flex">
                    <span class="material-symbols-outlined icon">
                        comment
                    </span>
                    <span class="material-symbols-outlined icon">
                        notifications
                    </span>
                    <div className="adminImage">
                        <img src={Profile} alt="Admin Image" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Create and Sell Extraordinary Products</h1>
                    <p>The world's fast growing industry today are natural made products!</p>

                    <div className="buttons flex">
                        <button className="btn">Explore More</button>
                        <button className="btn transparent">Top Sellers</button>
                    </div>

                    <div className="videoDiv">
                        <video src={Video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex">
                    <div className="main flex">
                        <div className="textDiv">
                            <h1>Mt Stat</h1>

                            <div className="flex">
                                <span>
                                    Today <br /> <small>4 Orders</small>
                                </span>
                                <span>
                                    This Month <br /> <small>127 Orders</small>
                                </span>
                            </div>

                            <span className="flex link">
                                Go to my Orders <span class="material-symbols-outlined icon">
                                    keyboard_arrow_right
                                </span>
                            </span>
                        </div>

                        <div className="imgDiv">
                            <img src={img} alt="Image Name" />
                        </div>

                        <div className="sideBarCard">
                            <span className="material-symbols-outlined icon">
                                help
                            </span>
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>Having trouble with SustainX, please contact us for more questions.</p>
                                <button className="btn">Go to help center</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default top
