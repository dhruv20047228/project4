import React from 'react'

export default function Navbar() {
    return (
        <nav className="container">
            <div className="navbar-left">
                <img src="/" alt="Logo" />
            </div>
            <div className="navbar-right">
                <li>
                    <a href="/Home.js">Home</a>
                </li>
                <li>
                    <a href="/CodePalette.js">Tools</a>
                </li>
                <li>
                    <a href="/Login.js">Login</a>
                </li>
                <li>
                    <a href="/Home.js">Contact Us</a>
                </li>
            </div>
        </nav>
    )
}
