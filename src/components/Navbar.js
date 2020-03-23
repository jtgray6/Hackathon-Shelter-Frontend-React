import React from 'react'

export default function Navbar() {
    return (
        <div className='header'>
            <h2 className='header-logo'>Dog Shelter Thing</h2>
            <div className="navbar">
                <nav>
                    <a href='#' className='navbar-link'>Home</a>
                    <a href='#' className='navbar-link'>About</a>
                    <a href='#' className='navbar-link'>Dogs</a>
                    <a href='#' className='navbar-link'>Contact Us</a>
                </nav>
            </div>
        </div>
    )
}
