import React, { useState, useRef } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

import peerlist1 from '../assets/images/peerlist1.jpg'
import peerlist2 from '../assets/images/peerlist2.jpg'
import peerlist3 from '../assets/images/peerlist3.jpg'
import peerlist4 from '../assets/images/peerlist4.jpg'
import peerlistlogo from '../assets/images/peerlistlogo.webp'

import etsy1 from '../assets/images/Etsy1.jpg'
import etsy2 from '../assets/images/Etsy2.jpg'
import etsy3 from '../assets/images/Etsy3.jpg'
import etsy4 from '../assets/images/Etsy4.jpg'
import etsylogo from '../assets/images/Etsylogo.webp'

import gitbook1 from '../assets/images/gitbook1.jpg'
import gitbook2 from '../assets/images/gitbook2.jpg'
import gitbook3 from '../assets/images/gitbook3.jpg'
import gitbook4 from '../assets/images/gitbook4.jpg'
import gitbooklogo from '../assets/images/Gitbooklogo.webp'

import tines from '../assets/images/tines.mp4'
import tineslogo from '../assets/images/tineslogo.webp'

import notion from '../assets/images/notion.mp4'
import notionlogo from '../assets/images/notionlogo.webp'

import bonsai from '../assets/images/bonsai.mp4'
import bonsailogo from '../assets/images/bonsailogo.webp'

function WebTabs() {
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
                
                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={tines} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={tineslogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Tines</h5>
                                <p className='mb-0 text-secondary'>The smart , secure workflow builder</p>
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

                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={peerlist1} alt="peerlist1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={peerlist2} alt="peerlist2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={peerlist3} alt="peerlist3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={peerlistlogo} alt="peerlistlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Peerlist</h5>
                                <p className='mb-0 text-secondary'>Professional Network for People in tech</p>
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

                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={etsy1} alt="etsy1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={etsy2} alt="etsy2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={etsy3} alt="etsy3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={etsylogo} alt="etsylogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Etsy</h5>
                                <p className='mb-0 text-secondary'>Shop for handmade , vintage and Unique gifts</p>
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

                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={notion} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={notionlogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Notion</h5>
                                <p className='mb-0 text-secondary'>One WorkSpace, Every team.</p>
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

                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <Slider {...settings}>
                                <div>
                                    <img className='w-100' src={gitbook1} alt="gitbook1.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={gitbook2} alt="gitbook2.png" />
                                </div>
                                <div className=''>
                                    <img className='w-100' src={gitbook3} alt="gitbook3.png" />
                                </div>
                            </Slider>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={gitbooklogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>GitBook</h5>
                                <p className='mb-0 text-secondary'>Knowledge management for Technical teams</p>
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

                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
                        <div className='tinder'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef} className='w-100'>
                                <source src={bonsai} type="video/mp4" />
                            </video>
                        </div>
                        <div className="tinder-data position-relative d-flex align-content-center pt-3 pb-4">
                            <img src={bonsailogo} alt="tinderlogo.png" />
                            <div className="d-flex  flex-column ps-2">
                                <h5 className='mb-0 text-white'>Bonsai</h5>
                                <p className='mb-0 text-secondary'>Business & invoicing management solution</p>
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




                    <div className="col-lg-4 col-md-6 col-sm-6 app-div">
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

                </div>
            </div>
    </>
  )
}

export default WebTabs
