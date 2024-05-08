import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";

import { FiSearch } from "react-icons/fi";
import { HiBars2 } from "react-icons/hi2";
import userimg from '../../assets/images/user-img.png'
import { IoLogoTwitch } from "react-icons/io";
import { FiSave } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineCardMembership } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

function Nav() {
    let [status, setStatus] = useState(false)
    const handleToggle = () => {
        setStatus(!status)
    }
    return (
        <header>
            <div className="nav" style={{ backgroundColor: "#111111" }}>
                <div className="container-fluid p-l-32 pr-32">
                    <div className="row py-2">
                        <div className="d-flex align-items-center justify-content-between">

                            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                <div className="d-flex align-items-center gap-4 nav-icons">
                                    <NavLink to="/">
                                        <IoLogoTwitch className='h3 text-white d-lg-block d-md-none d-sm-none d-none' />
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-8 col-sm-8 col-8">
                                <div className='position-relative search-bar d-flex align-items-center justify-content-center gap-2'>
                                    <a href="" className='text-white d-lg-none d-md-block'><IoLogoTwitch className='h3' /></a>
                                    <input type="search" placeholder='Search an iOS...' />
                                    <FiSearch className='position-absolute icon text-white' />
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-4 col-4 user-info">
                                <div className='btn-3 d-flex align-items-center' onClick={handleToggle}>
                                    <HiBars2 className='text-white h3 m-0' />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {status ?

                    <div className="sidebar">

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
        </header>
    )
}

export default Nav