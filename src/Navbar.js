import React from "react"
import airbnb from './images/airbnb-logo.png'
import App from "./App.css";

export default function Navbar() {
    return (
        <nav className="logo-el">
            <img src={airbnb} className="nav-logo" />
        </nav>
    )
}