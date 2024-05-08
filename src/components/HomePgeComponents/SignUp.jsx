import React, { useState } from 'react'
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png'
import google from '../../assets/images/google.png'
import headspace from '../../assets/images/headspace.png'
import svg3 from '../../assets/images/svg-image-3.png'
import svg5 from '../../assets/images/svg-image-5.png'
import svg8 from '../../assets/images/svg-image-8.png'

function SignUp({ toggleState }) {

    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(true); // Reset validation when user edits email
    };

    const handleContinueClick = () => {
        if (!validateEmail(email)) {
            setIsValid(false);
            return;
        }
        // If email is valid, you can navigate to Home page here
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <div style={{ backgroundColor: '#111111', height: '100vh' }}>

            <div className="container-fluid p-l-32 p-r-32">
                <div className="d-flex align-items-center justify-content-between">
                    <div></div>

                    <div className="d-flex flex-column align-items-center justify-content-center gap-3">
                        <img src={logo} style={{ filter: 'brightness(0.5) invert(.9)', width: '60px' }} />
                        <h3 className='tit3' style={{ fontSize: '40px' }}>Create your free account</h3>

                        <div className='d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn'>
                            <img src={google} />
                            <p className="mb-0">Continue with Google</p>
                        </div>

                        <div className="d-flex align-items-center justify-content-center gap-2">
                            <hr className="hr-2" />
                            <p className="para3">or</p>
                            <hr className="hr-2" />
                        </div>

                        <input
                            type="email"
                            placeholder="Enter email address"
                            className={isValid ? 'mail-in' : 'mail-in invalid'}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <button className="btn-7 w-100" onClick={handleContinueClick}>
                            Continue
                        </button>

                        <p className="para7 mt-2">
                            By continuing, you agree to Mobbin’s <Link style={{ color: 'hsl(0, 0%, 59.21%)' }}>Terms of Service</Link> and <Link style={{ color: 'hsl(0, 0%, 59.21%)' }}>Privacy Policy.</Link>
                        </p>

                        <p className='para7 mt-3 mb-4'>
                            Already have an account <Link style={{ color: 'hsl(0, 0%, 59.21%)' }}>Login</Link>
                        </p>

                        <p className="para7">Trusted by teams at</p>

                        <div className="d-flex align-items-center justify-content-center gap-3">
                            <img src={headspace} style={{ filter: 'brightness(0.5) invert(1)', opacity: '.5', width: '106px' }} />
                            <img src={svg3} style={{ filter: 'brightness(0.5) invert(1)', opacity: '.5', width: '106px' }} />
                            <img src={svg5} style={{ filter: 'brightness(0.5) invert(1)', opacity: '.5', width: '106px' }} />
                            <img src={svg8} style={{ filter: 'brightness(0.5) invert(1)', opacity: '.5', width: '106px' }} />
                        </div>

                    </div>

                    <div></div>
                </div>
            </div>

        </div>
    )
}

export default SignUp
