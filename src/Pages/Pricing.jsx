import React from 'react'
import PricingTab from '../components/PricingTab'
import Navbar from '../components/Common/Navbar'
import Enterprise from '../components/Enterprise'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'


function Pricing() {
    return (
        <>
            <Navbar />
            <div className="bg-1">
                <div className='container-fluid'>
                    <div className="heading d-flex flex-column align-items-center gap-4">
                        <div>
                            <h1 className='tit1 text-center pb-3'>Get unlimited access.</h1>
                            <h5 className='tit2 text-center'>Find the perfect plan, starting from less than $3/week — cancel anytime.</h5>
                        </div>
                        
                        <PricingTab />
                        <Enterprise />
                        <FAQ />
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Pricing
