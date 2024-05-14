import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

import logo from '../assets/images/logo.png'
import google from "../assets/images/google.png";
import screen_1_1 from "../assets/images/animation-image/screen_1_1.webp";
import screen_1_2 from "../assets/images/animation-image/screen_1_2.webp";
import screen_1_3 from "../assets/images/animation-image/screen_1_3.png";
import screen_1_4 from "../assets/images/animation-image/screen_1_4.png";
import screen_1_5 from "../assets/images/animation-image/screen_1_5.webp";
import screen_1_6 from "../assets/images/animation-image/screen_1_6.webp";

import screen_2_1 from "../assets/images/animation-image/screen_2_1.png";
import screen_2_2 from "../assets/images/animation-image/screen_2_2.png";
import screen_2_3 from "../assets/images/animation-image/screen_2_3.png";
import screen_2_4 from "../assets/images/animation-image/screen_2_4.png";
import screen_2_5 from "../assets/images/animation-image/screen_2_5.png";
import screen_2_6 from "../assets/images/animation-image/screen_2_6.png";

import screen_3_1 from "../assets/images/animation-image/screen_3_1.png";
import screen_3_2 from "../assets/images/animation-image/screen_3_2.png";
import screen_3_3 from "../assets/images/animation-image/screen_3_3.png";
import screen_3_4 from "../assets/images/animation-image/screen_3_4.png";
import screen_3_5 from "../assets/images/animation-image/screen_3_5.png";
import screen_3_6 from "../assets/images/animation-image/screen_3_6.png";

import screen_4_1 from "../assets/images/animation-image/screen_4_1.webp";
import screen_4_2 from "../assets/images/animation-image/screen_4_2.webp";
import screen_4_3 from "../assets/images/animation-image/screen_4_3.webp";
import screen_4_4 from "../assets/images/animation-image/screen_4_4.webp";
import screen_4_5 from "../assets/images/animation-image/screen_4_5.png";
import screen_4_6 from "../assets/images/animation-image/screen_4_6.png";

import screen_5_1 from "../assets/images/animation-image/screen_5_1.png";
import screen_5_2 from "../assets/images/animation-image/screen_5_2.webp";
import screen_5_3 from "../assets/images/animation-image/screen_5_3.webp";
import screen_5_4 from "../assets/images/animation-image/screen_5_4.webp";
import screen_5_5 from "../assets/images/animation-image/screen_5_5.png";
import screen_5_6 from "../assets/images/animation-image/screen_5_6.png";

import screen_6_1 from "../assets/images/animation-image/screen_6_1.png";
import screen_6_2 from "../assets/images/animation-image/screen_6_2.png";
import screen_6_3 from "../assets/images/animation-image/screen_6_3.png";
import screen_6_4 from "../assets/images/animation-image/screen_6_4.png";
import screen_6_5 from "../assets/images/animation-image/screen_6_5.png";
import screen_6_6 from "../assets/images/animation-image/screen_6_6.png";

import screen_7_1 from "../assets/images/animation-image/screen_7_1.png";
import screen_7_2 from "../assets/images/animation-image/screen_7_2.png";
import screen_7_3 from "../assets/images/animation-image/screen_7_3.png";
import screen_7_4 from "../assets/images/animation-image/screen_7_4.png";
import screen_7_5 from "../assets/images/animation-image/screen_7_5.png";
import screen_7_6 from "../assets/images/animation-image/screen_7_6.png";

function Login() {
  const [email, setEmail] = useState("");
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

  const [visibleDiv, setVisibleDiv] = useState('div1');

    const handleClick = (divId) => {
        setVisibleDiv(divId);
    };

  return (
    <div className="container-fluid bg-1">
      <div className="row">
        <div className="col-md-6">

          <div className="d-flex flex-column align-items-center justify-content-center gap-4" style={{padding: '40px 110px'}}>

          <img
              className="mb-3"
              src={logo}
              style={{ filter: "brightness(0.5) invert(0.9)", width: "53px" }}
            />

            <h3 className="tit6 text-center">Welcome back</h3>

            <div className="d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn">
              <img src={google} />
              <p className="mb-0">Continue with Google</p>
            </div>

            {visibleDiv === "div1" && (
              <div
                className="px-5 py-2 gogl-btn text-center"
                onClick={() => handleClick("div2")}
              >
                See other option
              </div>
            )}

            {visibleDiv === "div2" && (
              <div className="d-flex justify-content-between gap-3 w-100">
                <div className="d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn text-center">
                  <FaFacebook style={{ color: "#1877F2" }} />
                  Facebook
                </div>
                <div className="d-flex align-items-center justify-content-center gap-2 px-5 py-2 gogl-btn text-center">
                  <FaXTwitter />
                  Twitter
                </div>
              </div>
            )}

            <div className="d-flex align-items-center justify-content-center gap-3">
              <hr style={{ width: "180px", color: "#F0F0F0" }} />
              <p className="para3 mb-0">or</p>
              <hr style={{ width: "180px", color: "#F0F0F0" }} />
            </div>

            <input
              type="email"
              placeholder="Enter email address"
              className={isValid ? "mail-in" : "mail-in invalid"}
              value={email}
              onChange={handleEmailChange}
            />
            <button className="btn-7 w-100" onClick={handleContinueClick}>
              Continue
            </button>
            <p className="para7 text-center mt-3 mb-5">
              <small>
                By continuing, you agree to Mobbin’s
                <Link style={{ color: "#B5B5B5" }}>Terms of Service</Link> and
                <Link style={{ color: "#B5B5B5" }}> Privacy Policy.</Link>
              </small>
            </p>
          </div>

        </div>

        <div className="col-md-6">
          <div
            className="d-flex flex-grow-1 flex-column overflow-hidden"
            style={{ height: "100vh" }}
          >
            <div className="d-flex gap-5 anime-forward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_1_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-backward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_2_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-forward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_3_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-backward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_4_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-forward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_5_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-backward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_6_6} className="anim-img" />
              </div>
            </div>

            <div className="d-flex gap-5 anime-forward">
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_1} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_2} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_3} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_4} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_5} className="anim-img" />
              </div>
              <div
                style={{
                  minHeight: "calc(15vw + 10px + 10px)",
                  minWidth: "23vw",
                }}
              >
                <img src={screen_7_6} className="anim-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
