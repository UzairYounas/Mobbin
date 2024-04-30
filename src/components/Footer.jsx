import React from 'react'
import { Link} from "react-router-dom";

import logo from '.././assets/images/logo.png'
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <div className='px-5 mb-4'>
            <div className="d-flex flex-column gap-4 mt-5 mb-5">
                <Link className='tit3 text-decoration-none'>Features</Link>
                <Link className='tit3 text-decoration-none' to="pricing">Pricing</Link>
                <Link className='tit3 text-decoration-none'>About</Link>
                <Link className='tit3 text-decoration-none'>Changelog</Link>
                <Link className='tit3 text-decoration-none'>Blog</Link>
                <Link className='tit3 text-decoration-none'>Careers</Link>
                <Link className='tit3 text-decoration-none'>Help & Support</Link>
            </div>
            <hr className='hr2' />

            <div className="d-flex justify-content-between">
                <div className="d-flex flex align-items-center column gap-3">
                    <img src={logo} style={{width: "10%", filter: "brightness(0.5) invert(1)"}} />
                    <p className='para2 mb-0'>© 2018–2024 Mobbin. All rights reserved.</p>
                </div>
                <FaXTwitter className='tw-icon'/>
            </div>
        </div>
    )
}

export default Footer
