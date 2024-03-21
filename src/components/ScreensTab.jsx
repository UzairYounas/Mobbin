import React, { useState } from 'react'

import screen1 from '../assets/images/screen1.png'
import screen2 from '../assets/images/screen2.png'
import screen3 from '../assets/images/screen3.png'
import screen4 from '../assets/images/screen4.png'
import screen5 from '../assets/images/screen5.png'
import screen6 from '../assets/images/screen6.png'
import screen7 from '../assets/images/screen7.png'
import screen8 from '../assets/images/screen8.png'
import screen9 from '../assets/images/screen9.png'
import screen10 from '../assets/images/screen10.png'
import screen11 from '../assets/images/screen11.png'
import screen12 from '../assets/images/screen12.png'
import cleo from '../assets/images/cleo.webp'
import healthmate from '../assets/images/healthmatelogo.webp'
import shop from '../assets/images/shoplogo.webp'
import Overlay from './Overlay'

function ScreensTab({toggleState}) {
  return (
    <>
            <div className={toggleState === 1 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 2 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>


                </div>
            </div>

            <div className={toggleState === 3 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 4 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 5 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 6 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 7 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 8 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 9 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 10 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 11 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 12 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 13 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 14 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>

            <div className={toggleState === 15 ? "d-block container-fluid mt-5 p-l-32 p-r-32" : "d-none container-fluid mt-5 p-l-32 p-r-32"}>
                <div className="row">

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen3} alt="screen3.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen1} alt="screen1.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen5} alt="screen5.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={shop} alt="shop.png" />
                            <h5 className='mb-0 text-white'>shop</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen10} alt="screen10.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen6} alt="screen6.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={cleo} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>cleo</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen7} alt="screen7.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen8} alt="screen8.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen2} alt="screen2.pnng" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen9} alt="screen9.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen4} alt="screen4.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen11} alt="screen11.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className=' position-relative screen-div'>
                            <img className='w-100 h-100 br-r-28' src={screen12} alt="screen12.png" />
                            <Overlay />
                        </div>

                        <div className="tinder-data d-flex align-items-center gap-2 pt-3 pb-4">
                            <img src={healthmate} alt="cleo.png" />
                            <h5 className='mb-0 text-white'>Healthmate</h5>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default ScreensTab
