import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { RxCross2 } from "react-icons/rx";

function RequestModalBox({show, setShow}) {
   

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <>       

            <Modal show={show}>
                <Modal.Header>
                    <div></div>
                    <Modal.Title>Request Content</Modal.Title>
                    <RxCross2 className='cross-btn' onClick={()=> setShow(!show)} />
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex gap-3 align-items-center'>
                        <div className={toggleState === 1 ? 'para3 mod-btn d-block active-bor' : 'para3 mod-btn'} onClick={() => toggleTab(1)}>App</div>
                        <div className={toggleState === 2 ? 'para3 mod-btn d-block active-bor' : 'para3 mod-btn'} onClick={() => toggleTab(2)}>Screen</div>
                        <div className={toggleState === 3 ? 'para3 mod-btn d-block active-bor' : 'para3 mod-btn'} onClick={() => toggleTab(3)}>UI Element</div>
                        <div className={toggleState === 4 ? 'para3 mod-btn d-block active-bor' : 'para3 mod-btn'} onClick={() => toggleTab(4)}>Flow</div>
                    </div>

                    <form action="" className={toggleState === 1 ? 'd-flex flex-column gap-3 mt-4' : 'd-none flex-column gap-3 mt-4'}>
                        <div className="d-flex flex-column gap-2">
                            <p className='para8 mb-0'>Platform</p>
                            <Dropdown className='w-100'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-btn d-flex justify-content-between align-items-center'>
                                    iOS
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drop-menu'>
                                    <Dropdown.Item href="#/action-1">iOS</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Android</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Web</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">App name</p>
                            <input type="text" placeholder='e.g. Airbnb' className='user-nam' />
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Tell us why we should feature this app.</p>
                            <input type="text" className='user-nam' placeholder='e.g. This app has KYC flow and Mobbin has yet feature fintechapps with suchflows' />
                        </div>

                        <button className='btn-11 p-2 w-100 mt-3'>
                            Submit request
                        </button>

                    </form>

                    <form action="" className={toggleState === 2 ? 'd-flex flex-column gap-3 mt-4' : 'd-none flex-column gap-3 mt-4'}>
                        <div className="d-flex flex-column gap-2">
                            <p className='para8 mb-0'>Platform</p>
                            <Dropdown className='w-100'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-btn d-flex justify-content-between align-items-center'>
                                    Mobile
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drop-menu'>
                                    <Dropdown.Item href="#/action-1">Mobile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Web</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Screen Pattern</p>
                            <input type="text" placeholder='e.g. No internet connection' className='user-nam' />
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Definition</p>
                            <input type="text" className='user-nam' placeholder='How would you define it in your own words? (optional)' />
                        </div>

                        <button className='btn-11 p-2 w-100 mt-3'>
                            Submit request
                        </button>

                    </form>

                    <form action="" className={toggleState === 3 ? 'd-flex flex-column gap-3 mt-4' : 'd-none flex-column gap-3 mt-4'}>
                        <div className="d-flex flex-column gap-2">
                            <p className='para8 mb-0'>Platform</p>
                            <Dropdown className='w-100'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-btn d-flex justify-content-between align-items-center'>
                                    Mobile
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drop-menu'>
                                    <Dropdown.Item href="#/action-1">Mobile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Web</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">UI Elements</p>
                            <input type="text" placeholder='e.g. button' className='user-nam' />
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Definition</p>
                            <input type="text" className='user-nam' placeholder='How would you define it in your own words? (optional)' />
                        </div>

                        <button className='btn-11 p-2 w-100 mt-3'>
                            Submit request
                        </button>

                    </form>

                    <form action="" className={toggleState === 4 ? 'd-flex flex-column gap-3 mt-4' : 'd-none flex-column gap-3 mt-4'}>
                        <div className="d-flex flex-column gap-2">
                            <p className='para8 mb-0'>Platform</p>
                            <Dropdown className='w-100'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-btn d-flex justify-content-between align-items-center'>
                                    Mobile
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='drop-menu'>
                                    <Dropdown.Item href="#/action-1">Mobile</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Web</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Flow pattern</p>
                            <input type="text" placeholder='e.g. booking a ride' className='user-nam' />
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <p className="para8 mb-0">Definition</p>
                            <input type="text" className='user-nam' placeholder='How would you define it in your own words? (optional)' />
                        </div>

                        <button className='btn-11 p-2 w-100 mt-3'>
                            Submit request
                        </button>

                    </form>

                </Modal.Body>

            </Modal>
        </>
    );
}

export default RequestModalBox;
