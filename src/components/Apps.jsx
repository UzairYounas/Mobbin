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
import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

function Apps() {
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
        <div className='container-fluid mt-5 p-l-32 p-r-32'>
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
                    <div className="tinder-data position-relative d-flex align-content-center pt-4">
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
                    <div className="tinder-data position-relative d-flex align-content-center pt-4">
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
                    <div className="tinder-data position-relative d-flex align-content-center pt-4">
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
                    <div className="tinder-data position-relative d-flex align-content-center pt-4">
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

            </div>
        </div>
    )
}

export default Apps
