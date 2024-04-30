import React from 'react'
import Navbar from '../components/Common/Navbar'
import Changedata from '../components/Changedata'

function Changelog() {
  return (
    <>
      <Navbar />
      <div className="bg-1 heading">
        <div className="d-flex justify-content-center">
            <Changedata />

        </div>
      </div>
    </>
  )
}

export default Changelog
