import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Footer from './Footer';
import { IoArrowBack } from "react-icons/io5";

function Changelogdetail(props) {
    const { data } = props.location.data;

    return (
        <div>
            <Navbar />

            <div className='bg-1 heading'>
                <div className="d-flex justify-content-center">
                    <div className='d-flex flex-column px-5' style={{ maxWidth: "64rem" }}>
                        <Link to='/changelog' className='d-flex align-items-center text-decoration-none'>
                            <IoArrowBack className=' back-btn' style={{ color: "#F0F0F0" }} />
                            <p className='para1'>Back to changelog</p>
                        </Link>
                        <hr className='hr2 mt-5' />

                        <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
                            <h5 className='tit4' style={{ position: "sticky", top: "0px" }}>{data.date}</h5>
                            <img src={data.image} style={{ width: '70%', borderRadius: "10px" }} alt={data.altText} />
                        </div>
                        <h3 className='tit8 mb-3 p-l-75'>
                            {data.title}
                        </h3>
                        <p className='mb-3 para6 p-l-75'>
                            {data.description}
                        </p>

                        <h3 className='tit8 mb-3 p-l-75'>Other Improvements</h3>
                        <ul className='p-l-75' style={{ color: "#747474" }}>
                            <li className='mb-3 para6'>
                                {data.otherImprovements}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Changelogdetail;
