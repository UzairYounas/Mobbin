import React, { useState, useRef, useEffect } from 'react'
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
import google from '../../assets/images/google.png'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import { FaDownload } from "react-icons/fa6";
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


import otter from '../../assets/images/otter.mp4'
import SignUp from './SignUp'
import ModalBox from '../ModalBox';


function HomeDiscover() {

    const [locationModal, setLocationModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollMax, setScrollMax] = useState(1);
    const filterTabRef = useRef(null);


    useEffect(() => {
        const handleScroll = () => {
            if (filterTabRef.current) {
                setScrollPosition(filterTabRef.current.scrollLeft);
                setScrollMax(filterTabRef.current.scrollWidth - filterTabRef.current.clientWidth);
            }
        };

        if (filterTabRef.current) {
            filterTabRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (filterTabRef.current) {
                filterTabRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const filterTab = (amount) => {
        if (filterTabRef.current) {
            filterTabRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const [visibleDiv, setVisibleDiv] = useState('div1');

    const handleClick = (divId) => {
        setVisibleDiv(divId);
    };

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

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(true); // Reset validation when user edits email
    };

    const handleContinueClick = () => {
        if (!validateEmail(email)) {
            setIsValid(false);
            return;
        }
        // If email is valid, you can navigate to Home page here
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const [isVisible, setIsVisible] = useState(null);

    const clickOpen = (value) => {
        if (isVisible === null) {
            setIsVisible(value);
        } else {
            setIsVisible(null);
        }
    }

    return (
        <div style={{ backgroundColor: '#111111'}}>
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
                    <button
                        onClick={() => filterTab(-500)}
                        className='btn-5'
                        style={{ visibility: scrollPosition === 0 ? 'hidden' : 'visible' }}
                    ><FaArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => filterTab(500)}
                        className='btn-6'
                        style={{ minWidth: 'auto', visibility: scrollPosition >= scrollMax ? 'hidden' : 'visible' }}
                    ><FaArrowRight size={20} /></button>

                    <div id="filter-tab" className='d-flex gap-3 position-relative' ref={filterTabRef} style={{ overflowX: 'auto', width: '100%' }}>

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
                            Health & Fitness
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Food drink
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Education
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Shopping
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Artificial Intelligence
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Travel & Transport
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Lifestyle
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Entertainment
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Communication
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            Crypto & web3
                        </Link>
                        <Link to='/signup' className='border border-secondary rounded rounded-5 px-3 py-2 text-decoration-none'>
                            CRM
                        </Link>
                        <div className="filter-bg"></div>
                    </div>
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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(1)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 1 &&
                                    <div className='dotspopup p-2 d-flex justify-content-center flex-column z-3'>
                                        <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                            <FaDownload className='h5 m-0' />
                                            <p>Download all Screens</p>
                                        </div>
                                        <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                            <FaLink className='h4 m-0' />
                                            <p>Copy app link</p>
                                        </div>
                                    </div>
                                }
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

            <div className="container-fluid mt-5 position-relative">

                <div className="filter-bg"></div>

                <div className="row">
                    <div className='col-md-4'></div>

                    <div className='col-md-4'>

                        <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                            <h3 className="tit6 text-center">
                                Log in or sign up <br /> to continue browsing apps
                            </h3>

                            <div className='d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn'>
                                <img src={google} />
                                <p className="mb-0">Continue with Google</p>
                            </div>

                            {visibleDiv === 'div1' && (
                                <div className='px-5 py-2 gogl-btn text-center' onClick={() => handleClick('div2')}>
                                    See other option
                                </div>
                            )}

                            {visibleDiv === 'div2' && (
                                <div className='d-flex justify-content-between gap-3 w-100'>
                                    <div className='d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn text-center'>
                                        <FaFacebook style={{ color: '#1877F2' }} />
                                        Facebook
                                    </div>
                                    <div className='d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn text-center'>
                                        <FaXTwitter />
                                        Twitter
                                    </div>
                                </div>
                            )}

                            <div className="d-flex align-items-center justify-content-center gap-3">
                                <hr style={{ width: '180px', color: '#F0F0F0' }} />
                                <p className="para3 mb-0">or</p>
                                <hr style={{ width: '180px', color: '#F0F0F0' }} />
                            </div>

                            <input
                                type="email"
                                placeholder="Enter email address"
                                className={isValid ? 'mail-in' : 'mail-in invalid'}
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button className="btn-7 w-100" onClick={handleContinueClick}>
                                Continue with eamil
                            </button>
                            <p className="para7 text-center mt-3 mb-5">
                                <small>By continuing, you acknowledge that you have read and understood, and agree to Mobbin’s <Link style={{ color: '#B5B5B5' }}>Terms of Service</Link> and <Link style={{ color: '#B5B5B5' }}>Privacy Policy.</Link></small>
                            </p>
                        </div>

                    </div>

                    <div className='col-md-4'></div>
                </div>
            </div>

        </div>
    )
}

export default HomeDiscover
