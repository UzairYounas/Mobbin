import React, { useState } from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import Screens from './Screens';

function Home() {
    const filterTab = (amount) => {
        document.getElementById('filter-tab').scrollBy({ left: amount, behavior: 'smooth' });
    };
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='home'>
            <div className="container-fluid p-l-32 p-r-32">
                <h1>Discover </h1>
                <div className="d-flex gap-x-24 py-4">
                    <a href='' className='active'>Apps</a>
                    <a href=''>Screens</a>
                    <a href=''>UI Elements</a>
                    <a href=''>Flows</a>
                </div>
                <div className="d-flex flex-col align-items-center gap-y-24 gap-3">
                    <button className='d-flex align-items-center btn-4 gap-2'>
                        <BsFilterLeft />
                        Filters
                    </button>
                    <div className='vr-1 m-0'></div>

                    {/* =========== Scroll Bar ============== */}


                    <div className='position-relative btn-tab'>
                        <button onClick={() => filterTab(-300)} className='btn-5 d-767-none'><FaArrowLeft size={20} /></button>
                        <button onClick={() => filterTab(300)} className='btn-6 d-767-none'><FaArrowRight size={20} /></button>
                        <div id="filter-tab" className='d-flex gap-3'>
                            <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(1)}>
                                All
                            </div>
                            <div className={toggleState === 2 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(2)}>
                                Finance
                            </div>
                            <div className={toggleState === 3 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(3)}>
                                Business
                            </div>
                            <div className={toggleState === 4 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(4)}>
                                Health & Fitness
                            </div>
                            <div className={toggleState === 5 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(5)}>
                                Food & Drink
                            </div>
                            <div className={toggleState === 6 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(6)}>
                                Education
                            </div>
                            <div className={toggleState === 7 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(7)}>
                                Shopping
                            </div>
                            <div className={toggleState === 8 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(8)}>
                                Artificial Intelligence
                            </div>
                            <div className={toggleState === 9 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(9)}>
                                Travel & Transportation
                            </div>
                            <div className={toggleState === 10 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(10)}>
                                Lifestyle
                            </div>
                            <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                                Entertainment
                            </div>
                            <div className={toggleState === 12 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(12)}>
                                Communication
                            </div>
                            <div className={toggleState === 13 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(13)}>
                                Crypto & web3
                            </div>
                            <div className={toggleState === 14 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(14)}>
                                CRM
                            </div>
                            <div className={toggleState === 15 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(15)}>
                                Social Networking
                            </div>
                            <div className={toggleState === 16 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(16)}>
                                Medical
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Screens />
        </div>
    )
}

export default Home
