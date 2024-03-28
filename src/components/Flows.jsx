import React, { useState } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import Navbar from './Common/Navbar'
import Home from './Home'
import FlowsTab from './FlowsTab';
import ModalBox from './ModalBox';

function Flows() {
    const [locationModal, setLocationModal] = useState(false);

    const filterTab = (amount) => {
        document.getElementById('filter-tab').scrollBy({ left: amount, behavior: 'smooth' });
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
                        <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(1)}>
                            All
                        </div>
                        <div className={toggleState === 2 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(2)}>
                            Onboarding
                        </div>
                        <div className={toggleState === 3 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(3)}>
                            Subscribing & upgrading
                        </div>
                        <div className={toggleState === 4 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(4)}>
                            Creating Account
                        </div>
                        <div className={toggleState === 5 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(5)}>
                            Search & Finding
                        </div>
                        <div className={toggleState === 6 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(6)}>
                            Logging in
                        </div>
                        <div className={toggleState === 7 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(7)}>
                            Filtering & Sorting
                        </div>
                        <div className={toggleState === 8 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(8)}>
                            Giving Feedback
                        </div>
                        <div className={toggleState === 9 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(9)}>
                            Editing Profile
                        </div>
                        <div className={toggleState === 10 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(10)}>
                            Browsing Tutorial
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Cancelling Subscription
                        </div>
                        <div className={toggleState === 12 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(12)}>
                            Reviewing & Rating
                        </div>
                    </div>
                </div>

            </div>
            
            <FlowsTab toggleState={toggleState} />
        </div>
    )
}

export default Flows
