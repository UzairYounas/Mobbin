import React from 'react'

import { MdInfoOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import svg1 from '../assets/images/svg-image-1.png'
import svg2 from '../assets/images/svg-image-2.png'
import svg3 from '../assets/images/svg-image-3.png'
import svg4 from '../assets/images/svg-image-4.png'
import svg5 from '../assets/images/svg-image-5.png'
import svg6 from '../assets/images/svg-image-6.png'
import svg7 from '../assets/images/svg-image-7.png'

function Enterprise() {
    
    return (
        <div className='pt-5 text-center'>
            <h1 className='tit5'>Enterprise</h1>
            <p className='para2' style={{ padding: "0 300px 0 300px" }}>Built for larger organizations who want to scale with confidence. We offer advanced security, priority support, legal review, and more.</p>

            <button className='btn-12 mt-4'>contact Sales</button>

            <div className="scroll-container">
                <div className="carousel-primary">
                        <img src={svg1} />
                        <img src={svg2} />
                        <img src={svg3} />
                        <img src={svg4} />
                        <img src={svg5} />
                        <img src={svg6} />
                        <img src={svg1} />
                        <img src={svg2} />
                        <img src={svg3} />
                        <img src={svg4} />
                        <img src={svg5} />
                        <img src={svg6} />
                        <img src={svg1} />
                        <img src={svg2} />
                        <img src={svg3} />
                        <img src={svg4} />
                        <img src={svg5} />
                        <img src={svg6} />
                        <img src={svg1} />
                        <img src={svg2} />
                        <img src={svg3} />
                        <img src={svg4} />
                        <img src={svg5} />
                        <img src={svg6} />
                    </div>
                {/* <div className="carousel-primary carousel-secondary">
                    <img src={svg2} />
                    <img src={svg3} />
                    <img src={svg4} />
                    <img src={svg5} />
                    <img src={svg6} />
                    <img src={svg7} />
                </div> */}
            </div>

            <div className="row mt-3 px-5">
                <div className="d-flex gap-4 align-items-center">

                    <div className="col-md-4 plan">
                        <h1 className='tit3 text-start'>Compare plans & features</h1>

                        <h3>&nbsp;</h3>
                        <h3>&nbsp;</h3>
                        <h4 className='tit6 pb-3 text-start'>content</h4>

                        <div className='d-flex align-items-center gap-2 pb-3'>
                            <p className='para5 mb-0'>New apps & screens releases</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className='d-flex align-items-center gap-2 pb-3'>
                            <p className='para5 mb-0'>Access to latest versions of apps</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className='d-flex align-items-center gap-2 pb-3'>
                            <p className='para5 mb-0'>Access to previous versions of apps</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className='d-flex align-items-center gap-2 pb-3'>
                            <p className='para5 mb-0'>Access to flows of apps</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className='d-flex align-items-center gap-2 pb-3'>
                            <p className='para5 mb-0'>Filter & search results</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>
                        <h3>&nbsp;</h3>

                        <h4 className='tit6 pb-3 text-start'>Features</h4>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Collections</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Copy to clipboard</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>screen download</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Batch download</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>
                        <h3>&nbsp;</h3>

                        <h4 className='tit6 pb-3 text-start'>Collaboration</h4>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Team members</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Team collections</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Team administration</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Flexible seat-based licensing</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <h3>&nbsp;</h3>

                        <h4 className='tit6 pb-3 text-start'>Security & Access</h4>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>SAML Single Sign-On (SSO)</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>SCIM user provisioning (SSO)</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <h3 className='pb-2'>&nbsp;</h3>

                        <h4 className='tit6 pb-3 text-start'>Billing</h4>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Flexible payment options</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Custom security assessment</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>

                        <div className="d-flex align-items-center gap-2 pb-3">
                            <p className='para5 mb-0'>Custom agreement</p>
                            <MdInfoOutline style={{ color: "#F0F0F0" }} />
                        </div>


                    </div>

                    <div className="col plan text-start">
                        <h2 className='tit3'>Free</h2>
                        <p className='pb-2 mb-0'>$0/month</p>
                        <button className='btn-13'>on free plan</button>

                        {/* <h3>&nbsp;</h3> */}
                        <h3 className='pb-4'>&nbsp;</h3>

                        <p className='para2 pb-2'>Latest 8 apps</p>
                        <RxCross2 className='cr-icon pb-2 mb-2' />

                        <p className='para2 pb-2'>Limited to 2 rows</p>
                        <p className='para2 pb-2'>Limited to 2 rows</p>
                        <p className='para2 pb-2'>Limited to 2 rows</p>

                        {/* <h3>&nbsp;</h3> */}
                        <h3 className='pb-4'>&nbsp;</h3>

                        <p className='para2 pb-2 mb-0'>Up to 3 collections</p>

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />

                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3>&nbsp;</h3> */}
                        <h3 className='pb-4'>&nbsp;</h3>

                        <p className='para2 pb-2 mb-0'>Just you</p>

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3>&nbsp;</h3> */}
                        <h3 className='pb-4'>&nbsp;</h3>

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3>&nbsp;</h3> */}
                        <h3 className='pb-4'>&nbsp;</h3>

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                    </div>

                    <div className="col pro-plan text-start">
                        <h2 className='tit3'>Pro</h2>
                        <p className='pb-2 mb-0'>$10/month</p>
                        <button className='btn-13'>Upgrade</button>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3>&nbsp;</h3> */}
                        {/* <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column">
                            <FaCheck className='ch-icon pb-2' />
                            <FaCheck className='ch-icon pb-2' />
                        </div>

                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Unlimited</p>

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Just you</p>

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>
                        {/* 
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>


                    </div>

                    <div className="col plan text-start">
                        <h2 className='tit3'>Team</h2>
                        <p className='pb-2 mb-0'>$12/member/month</p>
                        <button className='btn-13'>Create team</button>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3>&nbsp;</h3> */}
                        {/* <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column">
                            <FaCheck className='ch-icon pb-2' />
                            <FaCheck className='ch-icon pb-2' />
                        </div>

                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Unlimited</p>

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Just you</p>

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                            <RxCross2 className='cr-icon' />
                        </div>


                    </div>

                    <div className="col plan text-start">
                        <h2 className='tit3'>Enterprise</h2>
                        <p className='pb-2 mb-0'>custom pricing</p>
                        <button className='btn-13'>Contact sales</button>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3>&nbsp;</h3> */}
                        {/* <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column">
                            <FaCheck className='ch-icon pb-2' />
                            <FaCheck className='ch-icon pb-2' />
                        </div>

                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>
                        <p className='para2 pb-2'>Unlimited</p>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Unlimited</p>

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <p className='para2 pb-2 mb-0'>Just you</p>

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>

                        {/* <h3 className='pb-2'>&nbsp;</h3>
                    <h3 className='pb-2'>&nbsp;</h3>

                    <h3 className='pb-2'>&nbsp;</h3> */}

                        <div className="d-flex flex-column gap-3">
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                            <FaCheck className='ch-icon' />
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}

export default Enterprise
