import React from 'react'
import Screens from './Screens';
import { Link, NavLink } from "react-router-dom";

function Home() {

    return (
        <div className='home bg-1'>
            <div className="container-fluid p-l-32 p-r-32">
                <h1>Discover </h1>
                <div className="d-flex gap-x-24 py-4">
                <NavLink to="/Apps"  > <a> Apps </a></NavLink>
                <NavLink to="/Screens" > <a> Screens </a></NavLink>
                <NavLink to="/Elements" > <a> UI Elements </a></NavLink>
                <NavLink to="/Flows" > <a> Flows </a></NavLink>
                </div>
            </div>
            {/* <Screens toggleState={toggleState} /> */}
        </div>
    )
}

export default Home
