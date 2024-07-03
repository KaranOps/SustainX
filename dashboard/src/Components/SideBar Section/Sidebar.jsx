import React from 'react'
import './sidebar.css'

/* Import Images */
import Logo from '../../Assets/Logo.png'



const Sidebar = () => {
    return (
        <div className='sidebar grid'>

            <div className="logoDiv flex">
                <img src={Logo} alt="Image name" srcset="" />
                <h2>SustainX</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICK MENU
                </h3>

                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                My Orders
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Explore
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Products
                            </span>
                        </a>
                    </li>



                </ul>

            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>

                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Contacts
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Billing
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <span className="material-symbols-outlined icon">
                                dashboard
                            </span>
                            <span className="smallText">
                                Products
                            </span>
                        </a>
                    </li>



                </ul>

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
    )
}

export default Sidebar
