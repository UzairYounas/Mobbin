import React, { useState } from 'react'
import { Modal, ModalBody } from 'reactstrap'; // Import the necessary components from your modal library

import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { SiDatabricks } from "react-icons/si";
import { FaRegWindowRestore } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import { PiArrowSquareRightThin } from "react-icons/pi";

import Revolutlogo from '../assets/images/Revolutlogo.webp'
import Airbnblogo from '../assets/images/Airbnb.webp'
import Ubberlogo from '../assets/images/Uberlogo.webp'
import spotifylogo from '../assets/images/Spotifylogo.webp'
import wiselogo from '../assets/images/Wiselogo.webp'
import tinderlogo from '../assets/images/tinderlogo.webp'
import Dudolingologo from '../assets/images/Duolingologo.webp'

import { FaRegCompass } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoArrowForward } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";

function ModalBox({locationModal, setLocationModal}) {
    
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
            {/* Modal Box */}
            <Modal isOpen={locationModal} toggle={() => setLocationModal(!locationModal)} centered zIndex={9} size="lg" data-bs-keyboard="false"
                backdrop={true}>

                <ModalBody className='body-bg'>
                    <div className='search-input position-relative w-100'>
                        <FiSearch className='position-absolute text-white' />
                        <input type="text" placeholder='search an IOS' />
                    </div>
                    <div className="container-fluid">
                        <div className="row">

                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 pt-4 modal-tabs d-flex flex-column gap-1">
                                <div className={toggleState === 1 ? 'modal-btn active-modal-btn d-flex align-items-center gap-3' : 'modal-btn d-flex align-items-center gap-3'}onClick={() => toggleTab(1)}>
                                    <button className='btn-10'>
                                        <BsStars style={{ color: "#F0F0F0" }} />
                                    </button>
                                    <span>Trending</span>
                                </div>
                                <div className={toggleState === 2 ? 'modal-btn active-modal-btn d-flex align-items-center gap-3' : 'modal-btn d-flex align-items-center gap-3'}onClick={() => toggleTab(2)}>
                                    <button className='btn-10'>
                                        <SiDatabricks style={{ color: "#F0F0F0" }} />
                                    </button>
                                    <span>App Categories</span>
                                </div>
                                <div className={toggleState === 3 ? 'modal-btn active-modal-btn d-flex align-items-center gap-3' : 'modal-btn d-flex align-items-center gap-3'}onClick={() => toggleTab(3)}>
                                    <button className='btn-10'>
                                        <FaRegWindowRestore style={{ color: "#F0F0F0" }} />
                                    </button>
                                    <span>Screens</span>
                                </div>
                                <div className={toggleState === 4 ? 'modal-btn active-modal-btn d-flex align-items-center gap-3' : 'modal-btn d-flex align-items-center gap-3'}onClick={() => toggleTab(4)}>
                                    <button className='btn-10'>
                                        <FaTableCellsLarge style={{ color: "#F0F0F0" }} />
                                    </button>
                                    <span>UI Elements</span>
                                </div>
                                <div className={toggleState === 5 ? 'modal-btn active-modal-btn d-flex align-items-center gap-3' : 'modal-btn d-flex align-items-center gap-3'}onClick={() => toggleTab(5)}>
                                    <button className='btn-10'>
                                        <PiArrowSquareRightThin style={{ color: "#F0F0F0" }} />
                                    </button>
                                    <span>Flows</span>
                                </div>

                            </div>

                            <div className={toggleState === 1 ? 'd-block col-lg-8 col-md-8 col-sm128 col-12 pt-4' : 'd-none col-lg-8 col-md-8 col-sm-8 col-8 pt-4'}>
                            <p style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Apps</p>
                                <div className="d-flex flex-wrap align-items-center gap-2">
                                    <div className="image-wrapper position-relative" style={{cursor: "pointer"}}>
                                        <img src={Revolutlogo} alt="revolut.png" />
                                        <div className="hover-text">Revolut</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={Airbnblogo} alt="airbnb.png" />
                                        <div className="hover-text">AirBnb</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={Ubberlogo} alt="ubber.png" />
                                        <div className="hover-text">Uber</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={spotifylogo} alt="spotify.png" />
                                        <div className="hover-text">Spotify</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={wiselogo} alt="wise.png" />
                                        <div className="hover-text">Wise</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={tinderlogo} alt="tinder.png" />
                                        <div className="hover-text">Tinder</div>
                                    </div>
                                    <div className="image-wrapper position-relative"  style={{cursor: "pointer"}}>
                                        <img src={Dudolingologo} alt="Dudolingo.png" />
                                        <div className="hover-text">Dudolingo</div>
                                    </div>
                                </div>
                                
                            <p className='pt-3' style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>UI Elements</p>

                                <div className="d-flex flex-wrap align-items-center gap-2">
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'> card</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'> Toast & SnackBar</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'> List</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Banner & Alert</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Dialog</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Table</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Button</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Progress Indicator</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>Top Bar</div>                                
                                </div>

                                <p className='pt-3' style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Flows</p>
                               
                               <div className="d-flex align-items-center gap-2">

                                    <div className='flow-data d-flex flex-column gap-5'>
                                        <p className='para1'>Onboarding</p>
                                        <FaRegCompass style={{color: "#F0F0F0"}}/>
                                    </div>
                                    <div className='flow-data d-md-flex d-sm-flex d-none flex-column gap-5'>
                                        <p className='para1'>Filtering & sorting</p>
                                        <LuFilter style={{color: "#F0F0F0"}}/>
                                    </div>
                                    <div className='flow-data d-flex flex-column gap-5'>
                                        <p className='para1'>Edit Profile</p>
                                        <LuPencil style={{color: "#F0F0F0"}}/>
                                    </div>
                                    <div className='flow-data d-flex flex-column gap-5'>
                                        <p className='para1'>Loging in</p>
                                        <IoArrowForward style={{color: "#F0F0F0"}}/>
                                    </div>
                               </div>

                               <p className='pt-3' style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Text in Screenshot</p>

                               <div className="d-flex flex-wrap align-items-center gap-2">
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'> "Forgot Password"</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>"Upgrade"</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>"Bluetooth</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>"Payment"</div>                                
                                    <div className='bg-2 border-secondary rounded rounded-5 px-2 py-1'>"Confirmed"</div>                               
                                </div>

                            </div>
                            <div className={toggleState === 2 ? 'd-block col-lg-8 col-md-8 col-sm-12 col-12 pt-4' : 'd-none col-lg-8 col-md-8 col-sm-8 col-8 pt-4'}>
                                <div className="tren-elem">
                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Categories</span>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Artificial Intelligence</span>
                                        <span style={{ color: "#989898" }}>18</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Business</span>
                                        <span style={{ color: "#989898" }}>10</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Collaboration</span>
                                        <span style={{ color: "#989898" }}>10</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Communication</span>
                                        <span style={{ color: "#989898" }}>4</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>CRM</span>
                                        <span style={{ color: "#989898" }}>13</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Crypto & Web 3</span>
                                        <span style={{ color: "#989898" }}>1</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Developer Tools</span>
                                        <span style={{ color: "#989898" }}>24</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Education</span>
                                        <span style={{ color: "#989898" }}>26</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Entertainment</span>
                                        <span style={{ color: "#989898" }}>47</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Finance</span>
                                        <span style={{ color: "#989898" }}>42</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Food Drink</span>
                                        <span style={{ color: "#989898" }}>8</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Graphics & Design</span>
                                        <span style={{ color: "#989898" }}>41</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Health $ Fitness</span>
                                        <span style={{ color: "#989898" }}>52</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Lifestyle</span>
                                        <span style={{ color: "#989898" }}>6</span>
                                    </div>

                                </div>

                            </div>
                            <div className={toggleState === 3 ? 'd-block col-lg-8 col-md-8 col-sm-12 col-12 pt-4' : 'd-none col-lg-8 col-md-8 col-sm-8 col-8 pt-4'}>
                                <div className="tren-elem">
                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>New User Experience</span>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Launch Screen</span>
                                        <span style={{ color: "#989898" }}>18</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Welcome & Get Started</span>
                                        <span style={{ color: "#989898" }}>10</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Walkthrough</span>
                                        <span style={{ color: "#989898" }}>10</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Signup</span>
                                        <span style={{ color: "#989898" }}>4</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Verification</span>
                                        <span style={{ color: "#989898" }}>13</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Account Setup</span>
                                        <span style={{ color: "#989898" }}>1</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Guided Tour & Tutorial</span>
                                        <span style={{ color: "#989898" }}>24</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Account Management</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>My Account & Profile</span>
                                        <span style={{ color: "#989898" }}>2838</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Settings & Prefrences</span>
                                        <span style={{ color: "#989898" }}>4206</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Login</span>
                                        <span style={{ color: "#989898" }}>1423</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Communication</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>About</span>
                                        <span style={{ color: "#989898" }}>61</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Action Option</span>
                                        <span style={{ color: "#989898" }}>1665</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Error</span>
                                        <span style={{ color: "#989898" }}>834</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Confirmation</span>
                                        <span style={{ color: "#989898" }}>1643</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Permition</span>
                                        <span style={{ color: "#989898" }}>934</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Empty State</span>
                                        <span style={{ color: "#989898" }}>2132</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Loading</span>
                                        <span style={{ color: "#989898" }}>77</span>
                                    </div>

                                </div>

                            </div>
                            <div className={toggleState === 4 ? 'd-block col-lg-8 col-md-8 col-sm-12 col-12 pt-4' : 'd-none col-lg-8 col-md-8 col-sm-8 col-8 pt-4'}>
                                <div className="tren-elem">
                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Control</span>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Button</span>
                                        <span style={{ color: "#989898" }}>2972</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Floating Action Button</span>
                                        <span style={{ color: "#989898" }}>1382</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Checkbox</span>
                                        <span style={{ color: "#989898" }}>2027</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Radio Button</span>
                                        <span style={{ color: "#989898" }}>1502</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Switch & Toggle</span>
                                        <span style={{ color: "#989898" }}>3112</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Text Field</span>
                                        <span style={{ color: "#989898" }}>10,730</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Search Bar</span>
                                        <span style={{ color: "#989898" }}>3820</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Slider</span>
                                        <span style={{ color: "#989898" }}>1313</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Stepper</span>
                                        <span style={{ color: "#989898" }}>558</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>View</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Top Bar & Navigation Bar</span>
                                        <span style={{ color: "#989898" }}>1328</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Card</span>
                                        <span style={{ color: "#989898" }}>7732</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Crausol</span>
                                        <span style={{ color: "#989898" }}>4866</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Table</span>
                                        <span style={{ color: "#989898" }}>255</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>List</span>
                                        <span style={{ color: "#989898" }}>9970</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Imagery</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Tab Bar</span>
                                        <span style={{ color: "#989898" }}>61</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Avatar</span>
                                        <span style={{ color: "#989898" }}>1665</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Dialog</span>
                                        <span style={{ color: "#989898" }}>3649</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Bottom Sheet (Tall)</span>
                                        <span style={{ color: "#989898" }}>5423</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Drawer & Sheet</span>
                                        <span style={{ color: "#989898" }}>118</span>
                                    </div>

                                </div>

                            </div>
                            <div className={toggleState === 5 ? 'd-block col-lg-8 col-md-8 col-sm-12 col-12 pt-4' : 'd-none col-lg-8 col-md-8 col-sm-8 col-8 pt-4'}>
                                <div className="tren-elem">
                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>New User Experience</span>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Onboarding</span>
                                        <span style={{ color: "#989898" }}>491</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Creating Account</span>
                                        <span style={{ color: "#989898" }}>473</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Browsing Tutorial</span>
                                        <span style={{ color: "#989898" }}>22</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Account Management</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Logging in</span>
                                        <span style={{ color: "#989898" }}>408</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Loging out</span>
                                        <span style={{ color: "#989898" }}>338</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Edit Profile</span>
                                        <span style={{ color: "#989898" }}>107</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Deleting & Deactivating Account</span>
                                        <span style={{ color: "#989898" }}>264</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Ressetting Password</span>
                                        <span style={{ color: "#989898" }}>88</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Settings & Prefrences</span>
                                        <span style={{ color: "#989898" }}>206</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Switiching Account</span>
                                        <span style={{ color: "#989898" }}>31</span>
                                    </div>

                                    <span style={{ color: "#989898", fontFamily: "BasierSquare", fontWeight: "700", fontSize: "14px" }}>Commerce & Finance</span>

                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>About</span>
                                        <span style={{ color: "#989898" }}>61</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Adding to cart & Bag</span>
                                        <span style={{ color: "#989898" }}>705</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Purchasing & Ordering</span>
                                        <span style={{ color: "#989898" }}>204</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Confirmation</span>
                                        <span style={{ color: "#989898" }}>1643</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Permition</span>
                                        <span style={{ color: "#989898" }}>934</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>List</span>
                                        <span style={{ color: "#989898" }}>16</span>
                                    </div>
                                    <div className="category-data d-flex align-items-center justify-content-between mt-2">
                                        <span>Redeming</span>
                                        <span style={{ color: "#989898" }}>67</span>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    )
}

export default ModalBox
