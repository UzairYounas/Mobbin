import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

function RequestModalBox() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <div></div>
                    <Modal.Title>Request Content</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex gap-3 align-items-center'>
                        <div className='para3'>App</div>
                        <div className='para3'>Screen</div>
                        <div className='para3'>UI Element</div>
                        <div className='para3'>Flow</div>
                    </div>

                    <form action="" className='d-flex flex-column gap-3 mt-4'>
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
                </Modal.Body>

            </Modal>
        </>
    );
}

export default RequestModalBox;
