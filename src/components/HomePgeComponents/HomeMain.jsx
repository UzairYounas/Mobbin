import React from 'react'
import headspace from '../../assets/images/headspace.png'
import svg3 from '../../assets/images/svg-image-3.png'
import svg4 from '../../assets/images/svg-image-4.png'
import svg8 from '../../assets/images/svg-image-8.png'
import stars from '../../assets/images/stars.png'
import plogo from '../../assets/images/Plogo.png'

import airbnb from '../../assets/images/airbnb.png'
import twitch from '../../assets/images/twitch.png'
import spotify from '../../assets/images/spotify.png'
import wise from '../../assets/images/wise.png'
import uber from '../../assets/images/uber.png'
import headspace1 from '../../assets/images/headspace1.png'
import shop from '../../assets/images/shop.png'
import loom from '../../assets/images/loom.png'

function HomeMain() {
    return (
        <div className='container-fluid heading pb-0' style={{ backgroundColor: '#111111', overflow: 'hidden'}}>
            <div className="d-flex flex-column align-items-center justify-content-center gap-3 pad-265 position-relative">
                <span className='inline-flex justify-content-center align-items-center p-2 btn-latest'>NEW DROPS WEEKLY</span>
                <h2 className='tit1 text-center'>The world’s largest mobile and web design library</h2>
                <p className="para3 text-center p-80">Save hours of UI & UX research with our library of300,000+ screens from theworld’s best designed apps.</p>
                
                <div className="d-flex gap-4">
                    <button className="btn-8">create free account</button>
                    <button className="btn-17">see all plans</button>
                </div>
                <p className="para4 mt-5">
                    Trusted by design-forward companies
                </p>
                <div className="d-flex align-items-center justify-content-center gap-3">
                    <img src={headspace} style={{filter: 'brightness(0.5) invert(1)' , opacity: '.5'}} />
                    <img src={svg3} style={{filter: 'brightness(0.5) invert(1)' , opacity: '.5'}} />
                    <img src={svg4} style={{filter: 'brightness(0.5) invert(1)' , opacity: '.5'}} />
                    <img src={svg8} style={{filter: 'brightness(0.5) invert(1)' , opacity: '.5'}} />
                </div>

                <div>
                    <img src={twitch} className='brand-img' style={{left: '-24px', top: '260px'}} />
                    <img src={airbnb} className='brand-img' style={{left: '146px', bottom: '124px'}} />
                    <img src={spotify} className='brand-img' style={{left: '0px'}} />
                    <img src={loom} className='brand-img' style={{left: '290px'}} />

                    <img src={wise} className='brand-img' style={{right: '-24px', top: '260px'}} />
                    <img src={headspace1} className='brand-img' style={{right: '146px', bottom: '124px'}} />
                    <img src={shop} className='brand-img' style={{right: '-19px'}} />
                    <img src={uber} className='brand-img' style={{right: '290px'}}  />
                </div>

                <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
                    <img src={stars} />
                    <p className='para8 mb-0'>4.7 on</p>
                    <img src={plogo} />
                    <p className="para8 mb-0">Product Hunt</p>
                </div>
            </div>
            <hr className='hr-2 mt-5 mb-0' />
        </div>
    )
}

export default HomeMain
