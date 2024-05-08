import React, { useState, useRef } from 'react'
import { Link } from "react-router-dom";
import Home from '../Home'

import tinderlogo from '../../assets/images/tinderlogo.webp'
import bettermentlogo from '../../assets/images/bettermentlogo.webp'

import iOSApps from '../../assets/images/iOSApps.mp4'
import bloom from '../../assets/images/bloom.webp'
import discordlogo from '../../assets/images/discordlogo.webp'
import stoiclogo from '../../assets/images/stoiclogo.webp'
import singaporlogo from '../../assets/images/singaporlogo.webp'
import Bloomberglogo from '../../assets/images/Bloomberglogo.webp'

import Applesports from '../../assets/images/Applesports.mp4'
import Applesportslogo from '../../assets/images/Applesportslogo.webp'

import otter from '../../assets/images/otter.mp4'
import SignUp from './SignUp'


function HomeDiscover() {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        setPlaying(true);
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setPlaying(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <div style={{ backgroundColor: '#111111' }}>
            <Home />

            <div className="container-fluid p-l-32 p-r-32 d-flex flex-column align-items-center gap-y-24 gap-3">

                <div id="filter-tab" className='d-flex gap-3'>
                    <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-3 py-2' : 'border border-secondary rounded rounded-5 px-3 py-2'} onClick={() => toggleTab(1)}>
                        All
                    </div>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Finance
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Business
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Shopping
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Food & Drink
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Education
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Health & Fitness
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Travel & Transportation
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Communication
                    </Link>
                    <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                        Entertainment
                    </Link>
                </div>

            </div>

            <div className={toggleState === 1 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={tinderlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Tinder</h5>
                                <p className='mb-0 text-secondary'>Meet new People & Date Singles</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={Applesports} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={Applesports} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={Applesports} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </div>
    )
}

export default HomeDiscover
