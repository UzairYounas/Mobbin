import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Home() {

    return (
        <div className='home bg-1'>
            <div className="container-fluid p-l-32 p-r-32">
                <h1>Discover </h1>
                <div className="d-flex gap-x-24 py-4">
                <NavLink to="/Apps" > Apps</NavLink>
                <NavLink to="/Screens" > Screens</NavLink>
                <NavLink to="/Elements" > UI Elements</NavLink>
                <NavLink to="/Flows" > Flows</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Home
