import React, { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Home from './Home';
import UITab from './UITab';
import Navbar from './Common/Navbar';
import ModalBox from './ModalBox';

function Apps() {
    const [locationModal, setLocationModal] = useState(false);



    const filterTab = (amount) => {
        document.getElementById('filter-tab').scrollBy({ left: amount, behavior: 'smooth' });
        console.log('success',)
    };
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='bg-1'>
            <Navbar />
            <Home />

            <div className="container-fluid p-l-32 p-r-32 d-flex flex-col align-items-center gap-y-24 gap-3">
                <button className='d-md-flex align-items-center d-sm-none d-none btn-4 gap-2' onClick={() => setLocationModal(!locationModal)}>
                    <BsFilterLeft />
                    Filters
                </button>
                <div className='vr-1 m-0 d-md-block d-sm-none d-none '></div>

                <ModalBox locationModal={locationModal} setLocationModal={setLocationModal} />

                {/* =========== Scroll Bar ============== */}


                <div className='position-relative btn-tab'>
                    <button onClick={() => filterTab(-300)} className='btn-5'><FaArrowLeft size={20} /></button>
                    <button onClick={() => filterTab(300)} className='btn-6'><FaArrowRight size={20} /></button>
                    <div id="filter-tab" className='d-flex gap-3'>
                        <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(1)}>
                            All
                        </div>
                        <div className={toggleState === 2 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(2)}>
                            Home
                        </div>
                        <div className={toggleState === 3 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(3)}>
                            Subscription & Paywall
                        </div>
                        <div className={toggleState === 4 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(4)}>
                            My Account & Profile
                        </div>
                        <div className={toggleState === 5 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(5)}>
                            Charts
                        </div>
                        <div className={toggleState === 6 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(6)}>
                            Welcome & get Started
                        </div>
                        <div className={toggleState === 7 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(7)}>
                            Promotions & Rewards
                        </div>
                        <div className={toggleState === 8 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(8)}>
                            Dashboard
                        </div>
                        <div className={toggleState === 9 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(9)}>
                            Signup
                        </div>
                        <div className={toggleState === 10 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(10)}>
                            Login
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Walkthrough
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Walkthrough
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Walkthrough
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Walkthrough
                        </div>
                    </div>
                </div>

            </div>
            <UITab toggleState={toggleState} />

        </div>
    )
}

export default Apps
