import React from 'react'
import { FiSearch } from "react-icons/fi";
import { HiBars2 } from "react-icons/hi2";
import userimg from '../../assets/images/user-img.png'
import { IoLogoTwitch } from "react-icons/io";

function Navbar() {
  return (
    <header>
      <div className="nav sticky-top">
        <div className="container-fluid p-l-32 pr-32">
          <div className="row py-2 d-flex align-items-center">

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <div className="d-flex align-items-center gap-4 nav-icons">
                <a href="" className='text-white d-lg-block d-md-none d-sm-none d-none'><IoLogoTwitch className='h3' /></a>
                <a href="" className='active'>iOS</a>
                <a href="">Android</a>
                <a href="">Web</a>
              </div>
            </div>

            <div className="col-lg-4 col-md-8 col-sm-8 col-8">
              <div className='position-relative search-bar d-flex align-items-center justify-content-center gap-2'>
                <a href="" className='text-white d-lg-none d-md-block'><IoLogoTwitch className='h3' /></a>
                <input type="search" placeholder='Search an iOS...' />
                <FiSearch className='position-absolute icon text-white' />
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-4 user-info">
              <div className='d-flex align-items-center justify-content-end gap-3'>
                <button className='btn-1'>Upload</button>
                <button className='btn-2'>Get Pro</button>

                <div className='btn-3 d-flex align-items-center gap-3'>
                  <img src={userimg} alt="userimg .png" />
                  <HiBars2 className='text-white h3 m-0' />
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar