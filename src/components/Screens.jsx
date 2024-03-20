import React, { useState } from 'react'
import screen1 from '../assets/images/screen1.png'
import screen2 from '../assets/images/screen2.png'
import screen3 from '../assets/images/screen3.png'
import screen4 from '../assets/images/screen4.png'
import cleo from '../assets/images/cleo.webp'
import healthmate from '../assets/images/healthmatelogo.webp'
import shop from '../assets/images/shoplogo.webp'
import { HiDotsHorizontal } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

function Screens() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className='container-fluid mt-5 p-l-32 p-r-32'>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={cleo} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>cleo</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={healthmate} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>Healthmate</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={shop} alt="shop.png" />
                        <h5 className='mb-0 text-white'>shop</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={healthmate} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>Healthmate</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={shop} alt="shop.png" />
                        <h5 className='mb-0 text-white'>shop</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={cleo} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>cleo</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={healthmate} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>Healthmate</h5>
                    </div>
                </div>

                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className=' position-relative screen-div'>
                        <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />

                        <div className="overlay w-100 h-100 position-absolute d-flex flex-column justify-content-between top-0 p-3">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <input type="checkbox" className='checkbox-round' />
                                <HiDotsHorizontal onClick={toggleVisibility} className='text-white h3' style={{ cursor: 'pointer' }} />
                            </div>
                            {isVisible &&
                                <div className='popup p-3 d-flex flex-column justify-content-between'>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <CiImageOn className='h4 m-0' />
                                        <p>Copy screen</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <MdOutlineFileDownload className='h4 m-0' />
                                        <p>Download as PNG</p>
                                    </div>
                                    <div className="d-flex align-items-center popup-data m-0 gap-2 p-2">
                                        <FaLink className='h4 m-0' />
                                        <p>Copy Screen link</p>
                                    </div>
                                </div>
                            }
                            <div className="d-flex align-items-center justify-content-around w-100">
                                <button className='btn-7'>copy</button>
                                <button className='btn-7'>Save</button>
                            </div>
                        </div>
                    </div>

                    <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                        <img src={healthmate} alt="cleo.png" />
                        <h5 className='mb-0 text-white'>Healthmate</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Screens
