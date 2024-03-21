import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

function Overlay() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
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
    )
}

export default Overlay
