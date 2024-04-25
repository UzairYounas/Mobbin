import React, { useState, useRef, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js'

import withings1 from '../assets/images/Withings1.png'
import withings2 from '../assets/images/Withings2.png'
import withings3 from '../assets/images/Withings3.png'
import withings4 from '../assets/images/Withings4.png'
import withings5 from '../assets/images/Withings5.png'
import withings6 from '../assets/images/Withings6.png'
import withings7 from '../assets/images/Withings7.png'
import withings8 from '../assets/images/Withings8.png'
import healthmatelogo from '../assets/images/healthmatelogo.webp'
import heathmatevideo from '../assets/images/healthmatevideo.mp4'

import shoplogo from '../assets/images/shoplogo.webp'
import shop1 from '../assets/images/shop1.png'
import shop2 from '../assets/images/shop2.png'
import shop3 from '../assets/images/shop3.png'
import shop4 from '../assets/images/shop4.png'
import shop5 from '../assets/images/shop5.png'
import shop6 from '../assets/images/shop6.png'
import shop7 from '../assets/images/shop7.png'
import shop8 from '../assets/images/shop8.png'
import shop9 from '../assets/images/shop9.png'
import shop10 from '../assets/images/shop10.png'
import shop11 from '../assets/images/shop11.png'
import shop12 from '../assets/images/shop12.png'
import shop13 from '../assets/images/shop13.png'
import shop14 from '../assets/images/shop14.png'
import shop15 from '../assets/images/shop15.png'
import shop16 from '../assets/images/shop16.png'
import shop17 from '../assets/images/shop17.png'
import shopvideo from '../assets/images/shopvideo.mp4'

import { MdOutlineSaveAlt } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";


function FlowsTab({ toggleState }) {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
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
    useEffect(() => {
        //init tooltip
        Array.from(document.querySelectorAll('button[data-bs-toggle="tooltip"]'))
            .forEach(tooltipNode => new Tooltip(tooltipNode))
    });

    return (
        <>
            <div className={toggleState === 1 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 2 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

            <div className={toggleState === 3 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 4 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

            <div className={toggleState === 5 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 6 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

            <div className={toggleState === 7 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 8 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

            <div className={toggleState === 9 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 10 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

            <div className={toggleState === 11 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">
                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                </div>
            </div>

            <div className={toggleState === 12 ? "d-block" : "d-none"}>
                <div className="container-fluid mt-4 p-l-32 p-r-32">

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={shoplogo} alt="" />
                            <h3>Shop</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>19 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={shopvideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={shop1} alt="shop1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop2} alt="shop2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop3} alt="shop3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop4} alt="shop4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop5} alt="shop5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop6} alt="shop6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop7} alt="shop7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop8} alt="shop8.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop9} alt="shop9.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop10} alt="shop10.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop11} alt="shop11.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop12} alt="shop12.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop13} alt="shop13.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={shop14} alt="shop14.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop15} alt="shop15.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop16} alt="shop16.png" />
                        </div>

                        <div className='flows-img'>
                            <img src={shop17} alt="shop17.png" />
                        </div>

                    </Slider>

                    <div className="d-flex align-items-center justify-content-between flows-data" style={{ cursor: 'pointer' }}>
                        <div className="d-flex flows-heading align-items-center gap-2">
                            <h3 className='head1'>Onboarding</h3>
                            <span>on</span>
                            <img src={healthmatelogo} alt="" />
                            <h3>Withings Health Mate</h3>
                        </div>
                        <div className='icons align-items-center gap-2'>
                            <div className="d-flex align-items-center">
                                <button type="button" class="btn-8" data-bs-toggle="tooltip" data-bs-placement="top" title="Paste into Mobbins Figma">copy to Figma</button>
                            </div>
                            <button type="button" class="collection-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Save to collection">
                                <MdOutlineSaveAlt className='text-white' />
                            </button>
                            <button type="button" class="dotted-icon d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-placement="top" title="Download">
                                <BsThreeDots className='text-white' />
                            </button>
                        </div>
                    </div>
                    <p style={{ color: '#939393' }}>33 Screens</p>
                    <Slider {...settings} className='pt-3 pb-3'>
                        <div className='flows-img'>
                            <video loop onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                ref={videoRef}>
                                <source src={heathmatevideo} type="video/mp4" />
                            </video>
                        </div>
                        <div className='flows-img'>
                            <img src={withings1} alt="withings1.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings2} alt="withings2.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings3} alt="withings3.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings4} alt="withings4.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings5} alt="withings5.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings6} alt="withings6.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings7} alt="withings7.png" />
                        </div>
                        <div className='flows-img'>
                            <img src={withings8} alt="withings8.png" />
                        </div>
                    </Slider>

                </div>
            </div>

        </>


    )
}

export default FlowsTab