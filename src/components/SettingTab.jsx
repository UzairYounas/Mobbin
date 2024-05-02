import React, { useState } from 'react'
import { Link } from "react-router-dom";

import { FaCheck } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import avatar1 from '../assets/images/avatar-left.webp'
import avatar2 from '../assets/images/avatar-center.webp'
import avatar3 from '../assets/images/avatar-right.webp'


function SettingTab({ toggleState, toggleTab }) {

    const [visibility, setVisibility] = useState(1);
    const toggleVisibility = (index) => {
        setVisibility(index);
    }
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleDelete = () => {
        setSelectedFile(null);
    };
    return (
        <>
            <div className={toggleState === 1 ? "d-block mt-4 p-l-32 p-r-32" : "d-none mt-4 p-l-32 p-r-32"}>

                <div className="position-relative" style={{ width: '120px', height: '120px' }}>
                    <input type="file" onChange={handleFileChange} accept="image/png,image/jpeg,image/webp" style={{ position: 'absolute', top: '25px', left: '30px', zIndex: '1' }} />

                    {selectedFile ? (
                        <div className='position-absolute'>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Uploaded"
                                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                            />
                            <br />
                            <button onClick={handleDelete} style={{ position: 'absolute', bottom: '16px', left: '50px' }}>Delete</button>
                        </div>
                    ) : (
                        <p>No file selected</p>
                    )}

                </div>
                {/* <div className='position-relative'>
                    <input type="file" onChange={handleFileChange} accept="image/png,image/jpeg,image/webp" />
                    {selectedFile ? (
                        <div className='position-absolute'>
                            <img
                                src={URL.createObjectURL(selectedFile)}
                                alt="Uploaded"
                                style={{ borderRadius: "50%", width: "150px", height: "150px" }}
                            />
                            <br />
                            <button onClick={handleDelete}>Delete</button>
                        </div>
                    ) : (
                        <p>No file selected</p>
                    )}
                </div> */}
                <h4 className='tit8'>User Name</h4>
                <p className='para3'>user@gmail.com</p>

                <h2 className='tit3 mt-5 mb-3'>Personal details</h2>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Name</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">user name</p>
                    <hr className="hr2" />
                </div>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Email Address</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">user@gmail.com</p>
                    <hr className="hr2" />
                </div>

                <div className='mt-4'>
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='tit6 mb-0'>Password</p>
                        <button className='btn-15'>Edit</button>
                    </div>
                    <p className="para3">******</p>
                    <hr className="hr2" />
                </div>

                <h3 className='tit6 mt-5 mb-4'>Manage account</h3>
                <div className="d-flex align-items-center justify-content-between">
                    <p className='tit6 mb-0'>Delete account</p>
                    <button className='btn-14'>Edit</button>
                </div>
                <p className="para3">permanently delete your Mobbin account</p>
            </div>

            <div className={toggleState === 2 ? "d-block" : "d-none"}>
                <h3 className='tit8'>Upgrade and <br /> get unlimited access</h3>

                <div className="d-flex align-items-center gap-3  mt-3">
                    <div className="d-flex align-items-center tab-bg gap-4">
                        <div className={visibility === 1 ? "tab active-tab" : "tab"} onClick={() => toggleVisibility(1)}>Yearly</div>
                        <div className={visibility === 2 ? "tab active-tab" : "tab"} onClick={() => toggleVisibility(2)}>Quaterly</div>
                        <div className={visibility === 3 ? "tab active-tab" : "tab"} onClick={() => toggleVisibility(3)}>Monthly</div>
                    </div>
                    <p className={visibility === 2 ? "para7 d-block mb-0" : "d-none para7 mb-0"}><span>save 33%</span> on a yearly subscription</p>

                    <p className={visibility === 3 ? "para7 d-block mb-0" : "d-none para7 mb-0"}><span>save 50%</span> on a yearly subscription</p>
                </div>

                <div className="sett-tab w-100 p-4 mt-5">
                    <div className="d-flex justify-content-between">
                        <h5 className='tit4'>Free</h5>
                        <p className='btn16'>current</p>
                    </div>

                    <div className="d-flex flex-column">
                        <h3 className='tit6'>$0/month</h3>

                        <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                            < FaCheck />
                            <p className='para-1 mb-0'>browse latest 8 apps & websites</p>
                        </div>

                        <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                            < FaCheck />
                            <p className='para-1 mb-0'>limited search results</p>
                        </div>

                        <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                            < FaCheck />
                            <p className='para-1 mb-0'>upto 3 collections</p>
                        </div>

                    </div>

                </div>
                <div className={visibility === 1 ? "d-flex align-items-center gap-3 mt-3" : "d-none align-items-center gap-3 mt-3"}>

                    <div className="sett-tab w-100 p-4" style={{ backgroundColor: '#1E1E1E' }}>
                        <h5 className="tit4">Pro</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$10/month</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Browse all apps</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Brows all flows</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited search results</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-1 mt-2 mb-2">
                                <p className='para-1 mb-0'>...and</p>
                                <Link className='para-1 mb-0' to='/pricing'>more</Link>
                            </div>

                            <button className='btn-11 p-2'>Get Pro</button>

                        </div>
                    </div>
                    <div className="sett-tab w-100 p-4">
                        <h5 className="tit4">Team</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$12/member/mo</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>All pro features</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Shareable team collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Admin tools</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>centralized Billing</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Seat-based pricing</p>
                            </div>

                            <button className='btn-11 p-2'>create team</button>

                        </div>
                    </div>

                </div>

                <div className={visibility === 2 ? "d-flex align-items-center gap-3 mt-3" : "d-none align-items-center gap-3 mt-3"}>

                    <div className="sett-tab w-100 p-4" style={{ backgroundColor: '#1E1E1E' }}>
                        <h5 className="tit4">Pro</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$15/month</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Browse all apps</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Brows all flows</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited search results</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-1 mt-2 mb-2">
                                <p className='para-1 mb-0'>...and</p>
                                <Link className='para-1 mb-0' to='/pricing'>more</Link>
                            </div>

                            <button className='btn-11 p-2'>Get Pro</button>

                        </div>
                    </div>
                    <div className="sett-tab w-100 p-4">
                        <h5 className="tit4">Team</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$18/member/mo</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>All pro features</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Shareable team collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Admin tools</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>centralized Billing</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Seat-based pricing</p>
                            </div>

                            <button className='btn-11 p-2'>create team</button>

                        </div>
                    </div>

                </div>

                <div className={visibility === 3 ? "d-flex align-items-center gap-3 mt-3" : "d-none align-items-center gap-3 mt-3"}>

                    <div className="sett-tab w-100 p-4" style={{ backgroundColor: '#1E1E1E' }}>
                        <h5 className="tit4">Pro</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$20/month</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Browse all apps</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Brows all flows</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited search results</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>unlimited collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-1 mt-2 mb-2">
                                <p className='para-1 mb-0'>...and</p>
                                <Link className='para-1 mb-0' to='/pricing'>more</Link>
                            </div>

                            <button className='btn-11 p-2'>Get Pro</button>

                        </div>
                    </div>
                    <div className="sett-tab w-100 p-4">
                        <h5 className="tit4">Team</h5>

                        <div className="d-flex flex-column">
                            <h3 className='tit9'>$24/member/mo</h3>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>All pro features</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Shareable team collections</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Admin tools</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>centralized Billing</p>
                            </div>

                            <div className="d-flex align-items-center gap-2 mt-2 mb-2">
                                < FaCheck />
                                <p className='para-1 mb-0'>Seat-based pricing</p>
                            </div>

                            <button className='btn-11 p-2'>create team</button>

                        </div>
                    </div>

                </div>

                <p className='para7 mt-3'>Compare all plans & features on the <Link to='/pricing' style={{ color: '#949090' }}>Pricing</Link> page.</p>

                <h4 className="tit6 pt-4">Enterprises</h4>
                <p className='para7 pt-2 pb-2'>Built for larger organizations who want to scale with confidence. <br /> We offer advanced security, priority support, legal review, and more.</p>

                <button className='btn-11 p-2 mb-3'>contact sales</button>
            </div>

            <div className={toggleState === 3 ? "d-block" : "d-none"}>
                <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center position-relative">
                        <img src={avatar1} className='avtar1' />
                        <img src={avatar2} className='avtar2' />
                        <img src={avatar3} className='avtar3' />
                    </div>
                    <h5 className='tit6 text-center'>create your first team and <br /> invite members.</h5>
                    <p className="para7" style={{ color: '#F0F0F0' }}>From $12 per member/month. See full <Link to='/pricing' style={{ color: '#F0F0F0' }}>plan & features.</Link> </p>
                    <button className='btn-11' style={{ padding: '10px 16px' }}>create team</button>
                </div>
            </div>

            <div className={toggleState === 4 ? "d-block" : "d-none"}>
                <h4 className='tit5'>Security</h4>

                <div className="d-flex align-items-center justify-content-between security mt-4">
                    <div className="d-flex align-items-center gap-3">
                        <FaLock style={{ color: '#F0F0F0' }} />
                        <p className='para7 mb-0'>Security features are available under Enterprise plan</p>
                    </div>
                    <button className='btn-11 p-2'>contact sales</button>
                </div>

                <div className="d-flex gap-3 mt-4">

                    <div className="d-flex flex-column sett-tab gap-3 w-100" style={{ padding: "18px 22px" }}>
                        <h5 className="tit9">SAML SSO</h5>
                        <p className="para7">SAML is the technical standard used by SSO providers to communicate that a user is authenticated.</p>
                        <button className='btn-13'>Turn on</button>
                    </div>

                    <div className="d-flex flex-column sett-tab gap-3 w-100" style={{ padding: "18px 22px" }}>
                        <h5 className="tit9">SCIM</h5>
                        <p className="para7">SCIM is an open standard that allows for the automation of user provisioning. <br /> &nbsp;</p>
                        <button className='btn-13'>Turn on</button>
                    </div>

                </div>
            </div>

        </>
    )
}

export default SettingTab