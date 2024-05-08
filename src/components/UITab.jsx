import React, { useState, useRef } from 'react'
import { FaLink } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import tinder1 from '../assets/images/tinder1.jpg'
import tinder2 from '../assets/images/tinder2.jpg'
import tinder3 from '../assets/images/tinder3.jpg'
import tinderlogo from '../assets/images/tinderlogo.webp'

import betterment1 from '../assets/images/betterment1.jpg'
import betterment2 from '../assets/images/betterment2.jpg'
import betterment3 from '../assets/images/betterment3.jpg'
import bettermentlogo from '../assets/images/bettermentlogo.webp'

import iOSApps from '../assets/images/iOSApps.mp4'
import bloom from '../assets/images/bloom.webp'

import discord1 from '../assets/images/discord1.jpg'
import discord2 from '../assets/images/discord2.jpg'
import discord3 from '../assets/images/discord3.jpg'
import discordlogo from '../assets/images/discordlogo.webp'

import stoic1 from '../assets/images/stoic1.jpg'
import stoic2 from '../assets/images/stoic2.jpg'
import stoic3 from '../assets/images/stoic3.jpg'
import stoiclogo from '../assets/images/stoiclogo.webp'

import singapor1 from '../assets/images/singapor1.jpg'
import singapor2 from '../assets/images/singapor2.jpg'
import singapor3 from '../assets/images/singapor3.jpg'
import singaporlogo from '../assets/images/singaporlogo.webp'

import Bloomberg1 from '../assets/images/Bloomberg1.jpg'
import Bloomberg2 from '../assets/images/Bloomberg2.jpg'
import Bloomberg3 from '../assets/images/Bloomberg3.jpg'
import Bloomberglogo from '../assets/images/Bloomberglogo.webp'

import Premier1 from '../assets/images/Premier1.jpg'
import Premier2 from '../assets/images/Premier2.jpg'
import Premier3 from '../assets/images/Premier3.jpg'
import Premierlogo from '../assets/images/Premierlogo.webp'

import Angi1 from '../assets/images/Angi1.jpg'
import Angi2 from '../assets/images/Angi2.jpg'
import Angi3 from '../assets/images/Angi3.jpg'
import Angilogo from '../assets/images/Angilogo.webp'

import Applesports from '../assets/images/Applesports.mp4'
import Applesportslogo from '../assets/images/Applesportslogo.webp'

import otter from '../assets/images/otter.mp4'
import otterlogo from '../assets/images/otterlogo.webp'

import Metaquest from '../assets/images/Metaquest.mp4'
import Metaquestlogo from '../assets/images/MetaQuestLogo.webp'

import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import { FaDownload } from "react-icons/fa6";

import { IoMdArrowRoundBack } from "react-icons/io";

function UITab({ toggleState }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
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

    const [isVisible, setIsVisible] = useState(null);

    const clickOpen = (value) => {
        if (isVisible === null) {
            setIsVisible(value);
        } else {
            setIsVisible(null);
        }
    }
    return (
        <>
            <div className={toggleState === 1 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(2)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 2 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(3)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 3 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(4)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 4 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(5)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 5 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(6)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 6 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(7)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 7 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(8)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 8 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(9)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 9 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(10)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 10 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(11)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 11 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(12)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 12 &&
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

                </div>
            </div >

            <div className={toggleState === 2 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(13)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 13 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(14)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 14 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(15)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 15 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(16)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 16 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(17)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 17 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(18)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 18 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(19)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 19 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(20)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 20 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(21)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 21 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(22)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 22 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(23)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 23 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(24)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 24 &&
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

                </div>
            </div>

            <div className={toggleState === 3 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(25)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 25 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(26)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 26 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(27)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 27 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(28)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 28 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(29)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 29 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(30)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 30 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(31)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 31 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(32)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 32 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(33)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 33 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(34)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 34 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(35)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 35 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(36)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 36 &&
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

                </div>
            </div>

            <div className={toggleState === 4 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(37)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 37 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(38)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 38 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(39)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 39 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(40)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 40 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(41)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 41 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(42)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 42 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(43)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 43 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(44)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 44 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(45)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 45 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(46)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 46 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(47)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 47 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(48)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 48 &&
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

                </div>
            </div>

            <div className={toggleState === 5 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(49)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 49 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(50)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 50 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(51)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 51 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(52)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 52 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(53)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 53 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(54)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 54 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(55)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 55 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(56)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 56 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(57)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 57 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(58)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 58 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(59)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 59 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen(60)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 60 &&
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

                </div>
            </div>

            <div className={toggleState === 6 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">
                
                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (61)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 61 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (62)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 62 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (63)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 63 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (64)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 64 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (65)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 65 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (66)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 66 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (67)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 67 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (68)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 68 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (69)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 69 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (70)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 70 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (71)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 71 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => setIsVisible (72)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 72 &&
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

                </div>
            </div>
            
            <div className={toggleState === 7 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">
                
                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (73)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 73 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (74)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 74 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (75)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 75 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => setIsVisible (76)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 76 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (77)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 77 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (78)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 78 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (79)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 79 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (80)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 80 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (81)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 81 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => setIsVisible (82)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 82 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (83)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 83 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (84)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 84 &&
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

                </div>
            </div>

            <div className={toggleState === 8 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">
                
                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (85)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 85 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (86)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 86 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (86)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 86 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (87)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 87 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (88)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 88 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (89)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 89 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (90)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 90 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (91)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 91 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (92)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 92 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (93)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 93 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (94)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 94 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (95)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 95 &&
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

                </div>
            </div>

            <div className={toggleState === 9 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (96)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 96 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (97)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 97 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (98)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 98 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (99)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 99 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (100)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 100 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (101)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 101 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (102)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 102 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (103)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 103 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (104)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 104 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (105)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 105 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (106)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 106 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (107)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 107 &&
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

                </div>
            </div>

            <div className={toggleState === 10 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (108)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 108 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (109)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 109 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (110)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 110 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (111)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 111 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (112)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 112 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (113)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 113 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (114)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 114 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (115)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 115 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (116)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 116 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (117)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 117 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (118)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 118 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (119)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 119 &&
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

                </div>
            </div>

            <div className={toggleState === 11 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">

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
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (120)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 120 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (121)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 121 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (122)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 122 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (123)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 123 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (124)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 124 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (125)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 125 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (126)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 126 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (127)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 127 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (128)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 128 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (129)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 129 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (130)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 130 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (131)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 131 &&
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

                </div>
            </div>

            <div className={toggleState === 12 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">
                
                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (133)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 132 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (134)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 134 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (135)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 135 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (136)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 136 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (137)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 137 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (138)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 138 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (139)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 139 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (140)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 140 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (141)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 141 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (142)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 142 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (143)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 143 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (144)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 144 &&
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

                </div>
            </div>

            <div className={toggleState === 13 ? "d-block container-fluid mt-4 p-l-32 p-r-32" : "d-none container-fluid mt-4 p-l-32 p-r-32"}>
                <div className="row">
                
                    <div className="col-lg-3 col-md-4 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={tinder1} alt="tinder1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder2} alt="tinder2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={tinder3} alt="tinder3.png" />
                                </div>
                            </Slider>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (145)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 145 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={betterment1} alt="betterment1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment2} alt="betterment2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={betterment3} alt="betterment3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bettermentlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Betterment</h5>
                                <p className='mb-0 text-secondary'>Investments & cash accounts</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (146)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 146 &&
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
                                <source src={iOSApps} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bloom} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bloom</h5>
                                <p className='mb-0 text-secondary'>Mental Health & Self Care</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (147)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 147 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={discord1} alt="discord1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord2} alt="discord2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={discord3} alt="discord3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={discordlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Discord</h5>
                                <p className='mb-0 text-secondary'>Group chat, Friends & Gaming</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (148)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 148 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={singapor1} alt="singapor1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor2} alt="singapor2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={singapor3} alt="singapor3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={singaporlogo} alt="singaporlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Singapor Airlines</h5>
                                <p className='mb-0 text-secondary'>A Great way to Fly</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (149)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 149 &&
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
                            <img src={Applesportslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Apple Sports</h5>
                                <p className='mb-0 text-secondary'>Live Scores and stats</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (150)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 150 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={stoic1} alt="stoic1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic2} alt="stoic2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={stoic3} alt="stoic3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={stoiclogo} alt="stoiclogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Stoic</h5>
                                <p className='mb-0 text-secondary'>Diary , Mood & Health Tracker</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (151)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 151 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Bloomberg1} alt="Bloomberg1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg2} alt="Bloomberg2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Bloomberg3} alt="Bloomberg3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Bloomberglogo} alt="Bloomberglogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Blooomberg</h5>
                                <p className='mb-0 text-secondary'>Stock Market & world Finance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (152)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 152 &&
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
                                <source src={Metaquest} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Metaquestlogo} alt="Metaquestlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Meta Quest</h5>
                                <p className='mb-0 text-secondary'>Expand your world</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (153)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 153 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Premier1} alt="Premier1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier2} alt="Premier2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Premier3} alt="Premier3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Premierlogo} alt="Premierogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Premier Logo</h5>
                                <p className='mb-0 text-secondary'>Football news , Score & Fixtures</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (154)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 154 &&
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
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={Angi1} alt="Angi1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi2} alt="Angi2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={Angi3} alt="Angi3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={Angilogo} alt="Angilogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Angi</h5>
                                <p className='mb-0 text-secondary'>House Maintainance</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (155)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 155 &&
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
                                <source src={otter} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={otterlogo} alt="otterlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Otter.ai</h5>
                                <p className='mb-0 text-secondary'>Work from home learaning</p>
                            </div>
                            <div className='tab-icons'>
                                <div className="save-icon position-absolute d-flex align-items-center justify-content-center">
                                    <MdOutlineSaveAlt />
                                </div>
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center" onClick={() => clickOpen (156)}>
                                    <BsThreeDots className='text-white' />
                                </div>
                                {isVisible === 156 &&
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

                </div>
            </div>

        </>
    )
}

export default UITab
