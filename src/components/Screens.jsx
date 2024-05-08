import React, { useState, useRef, useEffect} from 'react'
import { BsFilterLeft } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

import Home from './Home'
import ScreensTab from './ScreensTab';
import Navbar from './Common/Navbar';
import ModalBox from './ModalBox';

function Screens() {
    const [locationModal, setLocationModal] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollMax, setScrollMax] = useState(1);
    const filterTabRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            if (filterTabRef.current) {
                setScrollPosition(filterTabRef.current.scrollLeft);
                setScrollMax(filterTabRef.current.scrollWidth - filterTabRef.current.clientWidth);
            }
        };

        if (filterTabRef.current) {
            filterTabRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (filterTabRef.current) {
                filterTabRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const filterTab = (amount) => {
        if (filterTabRef.current) {
            filterTabRef.current.scrollBy({ left: amount, behavior: 'smooth' });
        }
    };

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className='bg-1'>
            <Navbar />
            <Home />
            <div className="container-fluid p-l-32 p-r-32 d-flex flex-col align-items-center gap-y-24 gap-3">
                <button className='d-lg-flex d-md-flex d-sm-none d-none align-items-center btn-4 gap-2' onClick={() => setLocationModal(!locationModal)}>
                    <BsFilterLeft />
                    Filters
                </button>
                <div className='vr-1 m-0 d-lg-block d-md-block d-sm-none d-none'></div>

                <ModalBox locationModal={locationModal} setLocationModal={setLocationModal} />

                {/* =========== Scroll Bar ============== */}


                <div className='position-relative btn-tab'>
                <button
                        onClick={() => filterTab(-500)}
                        className='btn-5'
                        style={{ visibility: scrollPosition === 0 ? 'hidden' : 'visible' }}
                    ><FaArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => filterTab(500)}
                        className='btn-6'
                        style={{ minWidth: 'auto', visibility: scrollPosition >= scrollMax ? 'hidden' : 'visible' }}
                    ><FaArrowRight size={20} /></button>
                    <div id="filter-tab" className='d-flex gap-3' ref={filterTabRef} style={{ overflowX: 'auto', width: '100%' }}>
                        <div className={toggleState === 1 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(1)}>
                            All
                        </div>
                        <div className={toggleState === 2 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(2)}>
                            Finance
                        </div>
                        <div className={toggleState === 3 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(3)}>
                            Business
                        </div>
                        <div className={toggleState === 4 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(4)}>
                            Health & Fitness
                        </div>
                        <div className={toggleState === 5 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(5)}>
                            Food & Drink
                        </div>
                        <div className={toggleState === 6 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(6)}>
                            Education
                        </div>
                        <div className={toggleState === 7 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(7)}>
                            Shopping
                        </div>
                        <div className={toggleState === 8 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(8)}>
                            Artificial Intelligence
                        </div>
                        <div className={toggleState === 9 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(9)}>
                            Travel & Transportation
                        </div>
                        <div className={toggleState === 10 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(10)}>
                            Lifestyle
                        </div>
                        <div className={toggleState === 11 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(11)}>
                            Entertainment
                        </div>
                        <div className={toggleState === 12 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(12)}>
                            Communication
                        </div>
                        <div className={toggleState === 13 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(13)}>
                            Crypto & web3
                        </div>
                        <div className={toggleState === 14 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(14)}>
                            CRM
                        </div>
                        <div className={toggleState === 15 ? 'border active-border border-secondary rounded rounded-5 px-2 py-1' : 'border border-secondary rounded rounded-5 px-2 py-1'} onClick={() => toggleTab(15)}>
                            Social Networking
                        </div>
                    </div>
                </div>

            </div>

            <ScreensTab toggleState={toggleState} />

        </div>
    )
}

export default Screens