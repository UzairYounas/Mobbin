import React from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Home() {
    const filterTab = (amount) => {
        document.getElementById('filter-tab').scrollBy({ left: amount, behavior: 'smooth' });
    };
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


                    <div className='position-relative'>
                        <button onClick={() => filterTab(-300)} className='btn-5 d-767-none'><FaArrowLeft size={20} /></button>
                        <button onClick={() => filterTab(300)} className='btn-6 d-767-none'><FaArrowRight size={20} /></button>
                        <div id="filter-tab" className='d-flex gap-3'>
                            <div className=' border border-secondary rounded rounded-5 px-2 py-1'>
                                All
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Finance
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Business
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Health & Fitness
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Food & Drink
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Education
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Shopping
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Artificial Intelligence
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Travel & Transportation
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Lifestyle
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Entertainment
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Communication
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Crypto & web3
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                CRM
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Social Networking
                            </div>
                            <div className='border border-secondary rounded rounded-5 px-2 py-1'>
                                Medical
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home
