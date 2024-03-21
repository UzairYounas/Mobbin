import React, { useState, useRef } from 'react'
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

function UITab({toggleState}) {
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

  return (
    <>
      <div className={toggleState === 1 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 2 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 3 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 4 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 5 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 6 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className={toggleState === 7 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 8 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 9 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 10 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 11 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
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
                                <div className="dots-icon position-absolute d-flex align-items-center justify-content-center">
                                    <BsThreeDots className='text-white' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default UITab
