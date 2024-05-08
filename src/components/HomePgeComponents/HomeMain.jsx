import React from 'react'
import headspace from '../../assets/images/headspace.png'
import svg3 from '../../assets/images/svg-image-3.png'
import svg4 from '../../assets/images/svg-image-4.png'
import svg8 from '../../assets/images/svg-image-8.png'
import stars from '../../assets/images/stars.png'
import plogo from '../../assets/images/Plogo.png'

function HomeMain() {
    return (
        <div className='container-fluid heading' style={{ backgroundColor: '#111111' }}>
            <div className="d-flex flex-column align-items-center justify-content-center gap-3 pad-265">
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

                <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
                    <img src={stars} />
                    <p className='para8 mb-0'>4.7 on</p>
                    <img src={plogo} />
                    <p className="para8 mb-0">Product Hunt</p>
                </div>
            </div>
            <hr className='hr-2 mt-5' />
        </div>
    )
}

export default HomeMain
