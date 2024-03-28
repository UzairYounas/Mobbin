import React, { useState, useEffect } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'


import screen1 from '../assets/images/screen1.png'
import screen2 from '../assets/images/screen2.png'
import screen3 from '../assets/images/screen3.png'

import Home from './Home'
import ScreensTab from './ScreensTab';
import Navbar from './Common/Navbar';
import ModalBox from './ModalBox';

function Elements() {
    const [locationModal, setLocationModal] = useState(false);
    
    const filterTab = (amount) => {
        document.getElementById('filter-tab').scrollBy({ left: amount, behavior: 'smooth' });
    };
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    useEffect(() => {
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    });
    return (
        <div className='bg-1'>
            <Navbar />
            <Home />
            <div className="container-fluid p-l-32 p-r-32 d-flex flex-col align-items-center gap-y-24 gap-3">
                <button className='d-lg-flex d-md-flex d-sm-none d-none align-items-center btn-4 gap-2' onClick={() => setLocationModal(!locationModal)}>
                    <BsFilterLeft />
                    Filters
                </button>
                <div className='vr-1 m-0 d-lg-block d-md-block d-sm-none d-none'></div>

                <ModalBox locationModal={locationModal} setLocationModal={setLocationModal} />

                {/* =========== Scroll Bar ============== */}


                <div className='position-relative btn-tab'>
                    <button onClick={() => filterTab(-300)} className='btn-5'><FaArrowLeft size={20} /></button>
                    <button onClick={() => filterTab(300)} className='btn-6'><FaArrowRight size={20} /></button>
                    <div id="filter-tab" className='d-flex gap-3'>
                        <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1'  : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(1)}>
                            All
                        </div>
                        <div className={toggleState === 2 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(2)}>
                            Card
                        </div>
                        <div className={toggleState === 3 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(3)}>
                            Banner & Alert
                        </div>
                        <div className={toggleState === 4 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(4)}>
                            Bottom Sheet
                        </div>
                        <div className={toggleState === 5 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(5)}>
                            Progress Indicator
                        </div>
                        <div className={toggleState === 6 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(6)}>
                            Dialogue
                        </div>
                        <div className={toggleState === 7 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(7)}>
                            Toast & Snackbar
                        </div>
                        <div className={toggleState === 8 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(8)}>
                            Tab & Segmented Control
                        </div>
                        <div className={toggleState === 9 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(9)}>
                            Text Field
                        </div>
                        <div className={toggleState === 10 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(10)}>
                            Button
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            List
                        </div>
                        <div className={toggleState === 12 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(12)}>
                            Illustration
                        </div>
                        <div className={toggleState === 13 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(13)}>
                            Tooltip
                        </div>
                        <div className={toggleState === 14 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(14)}>
                            Tag & Chips
                        </div>
                        <div className={toggleState === 15 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(15)}>
                            Social Networking
                        </div>
                    </div>
                </div>

            </div>

            <ScreensTab toggleState={toggleState} />

        </div>
    )
}

export default Elements

