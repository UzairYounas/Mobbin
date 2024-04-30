import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { IoLogoTwitch } from "react-icons/io";
import { FiSave } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineCardMembership } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdSupervisorAccount } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

import userimg from '../assets/images/user-img.png'
// import logo from '../assets/images/logo.png'

function Setting() {
    let [status, setStatus] = useState(false)
    const handleToggle = () => {
        setStatus(!status)
    }
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleDelete = () => {
        setSelectedFile(null);
    };

    return (
        <div style={{ backgroundColor: "#111111" }}>
            <div className="set-nav">
                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/">
                        <IoLogoTwitch className='h3 text-white d-lg-block d-md-none d-sm-none d-none' style={{ filter: 'brightness(0.5) invert(1)' }} />
                    </Link>
                    <div className='btn3' onClick={handleToggle}>
                        <img src={userimg} />
                    </div>
                </div>
                {status ?

                    <div className="sidebar">
                        <div className='sidebar-content p-1'>
                            <h5>User-name</h5>
                            <p>user12@gmail.com</p>
                        </div>
                        <button className='btn-9'>Request Content</button>
                        <hr className='hr-2' />

                        <div className="collection d-flex align-items-center gap-2">
                            <FiSave className='h5 mb-0' />
                            <p className='mb-0'>Collection</p>
                        </div>
                        <div className="collection d-flex align-items-center gap-2">
                            <MdOutlineSettings className='h5 mb-0' />
                            <p className='mb-0'>Settings</p>
                        </div>
                        <div className="collection d-flex align-items-center gap-2">
                            <MdOutlineCardMembership className='h5 mb-0' />
                            <p className='mb-0'>Memberships</p>
                        </div>

                        <hr className='hr-2' />

                        <div className="theme d-flex align-items-center gap-2">
                            <div style={{ color: "#939393", fontFamily: "BasierSquare", fontSize: "15px" }}>
                                <div className='light-theme' style={{ backgroundColor: "#F0F0F0" }}></div>
                                Light
                            </div>
                            <div style={{ color: "#939393", fontFamily: "BasierSquare", fontSize: "15px" }}>
                                <div className="light-theme" style={{ backgroundColor: "#000000" }}></div>
                                Dark
                            </div>
                            <div style={{ color: "#939393", fontFamily: "BasierSquare", fontSize: "15px" }}>
                                <div className="light-theme" style={{ backgroundColor: "#2E2E2E" }}></div>
                                System
                            </div>
                        </div>

                        <hr className='hr-2' />

                        <div className='theme-item d-flex flex-column'>
                            <Link to='/pricing' className='collection mb-0 text-decoration-none'>Pricing</Link>
                            <p className='collection mb-0'>Changelog</p>
                            <p className='collection mb-0'>Blog</p>
                            <div className='collection d-flex align-items-center justify-content-between'>
                                <p className='mb-0'>Careers</p>
                                <MdArrowOutward style={{ color: "#F0F0F0" }} />
                            </div>
                            <div className='collection d-flex align-items-center justify-content-between'>
                                <p className='mb-0'>Support</p>
                                <MdArrowOutward style={{ color: "#F0F0F0" }} />
                            </div>
                            <p className='collection mb-0'>Logout</p>
                        </div>

                        <hr className='hr-2' />

                        <div className="sidebar-footer d-flex align-items-center justify-content-between">
                            <div className='d-flex align-items-center gap-2'>
                                <a>Privacy</a>
                                <a>Terms</a>
                                <a>copyright</a>
                            </div>
                            <div>
                                <FaXTwitter className='twitter-icon' />
                            </div>
                        </div>

                    </div>
                    : null
                }
            </div>
            <div className="container-fluid heading">
                <div className="row">
                    <div className="col-md-3">
                        <div className={toggleState === 1 ? 'd-flex active-set align-items-center gap-2 mb-3' : 'd-flex align-items-center gap-2 mb-3'} onClick={() => toggleTab(1)}>
                            <MdOutlineAccountCircle className='seet-icon' />
                            <p className='para3 mb-0'>Account</p>
                        </div>
                        <div className={toggleState === 2 ? 'd-flex active-set align-items-center gap-2 mb-3' : 'd-flex align-items-center gap-2 mb-3'} onClick={() => toggleTab(2)}>
                            <MdPayment className='seet-icon' />
                            <p className='para3 mb-0'>Payment & billing</p>
                        </div>
                        <div className={toggleState === 3 ? 'd-flex active-set align-items-center gap-2 mb-3' : 'd-flex align-items-center gap-2 mb-3'} onClick={() => toggleTab(3)}>
                            <MdSupervisorAccount className='seet-icon' />
                            <p className='para3 mb-0'>Team</p>
                        </div>
                        <div className={toggleState === 4 ? 'd-flex active-set align-items-center gap-2 mb-3' : 'd-flex align-items-center gap-2 mb-3'} onClick={() => toggleTab(4)}>
                            <FaLock className='seet-icon' />
                            <p className='para3 mb-0'>Security</p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3 className='tit8'>Upgrade and <br /> get unlimited access</h3>
                        <div className="d-flex align-items-center tab-bg gap-4 mt-3">
                            <div className={toggleState === 4 ? "tab active-tab" : "tab"} onClick={() => toggleTab(4)}>Yearly</div>
                            <div className={toggleState === 5 ? "tab active-tab" : "tab"} onClick={() => toggleTab(5)}>Quaterly</div>
                            <div className={toggleState === 6 ? "tab active-tab" : "tab"} onClick={() => toggleTab(6)}>Monthly</div>
                        </div>

                        <div className="sett-tab w-100 p-4 mt-5">
                            <div className="d-flex justify-content-between">
                                <h5 className='tit4'>Free</h5>
                                <p className='btn16'>current</p>
                            </div>

                            <div className="d-flex flex-column">
                                <h3 className='tit6'>$0/month</h3>

                                <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                    < FaCheck />
                                    <p className='para-1 mb-0'>browse latest 8 apps & websites</p>
                                </div>

                                <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                    < FaCheck />
                                    <p className='para-1 mb-0'>limited search results</p>
                                </div>

                                <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                    < FaCheck />
                                    <p className='para-1 mb-0'>upto 3 collections</p>
                                </div>

                            </div>

                        </div>
                        <div className="d-flex align-items-center w-100 gap-3 mt-3">
                            <div className="sett-tab p-4">
                                <h5 className="tit4">Pro</h5>

                                <div className="d-flex flex-column">
                                    <h3 className='tit9'>$10/month</h3>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>Browse all apps</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>Brows all flows</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>unlimited search results</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>unlimited collections</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-1 mt-2 mb-2">
                                        <p className='para-1 mb-0'>...and</p>
                                        <Link className='para-1 mb-0' to='/pricing'>more</Link>
                                    </div>

                                    <button className='btn-11 p-2'>Get Pro</button>

                                </div>
                            </div>
                            <div className="sett-tab p-4">
                                <h5 className="tit4">Team</h5>

                                <div className="d-flex flex-column">
                                    <h3 className='tit9'>$12/member/mo</h3>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>All pro features</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>Shareable team collections</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>Admin tools</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>centralized Billing</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                        < FaCheck />
                                        <p className='para-1 mb-0'>Seat-based pricing</p>
                                    </div>

                                    <button className='btn-11 p-2'>create team</button>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3"></div>
                </div>
            </div>
        </div>
    )
}

export default Setting
