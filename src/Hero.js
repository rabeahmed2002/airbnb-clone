import React from "react";
import photogrid from './images/photo-grid.png'

export default function Hero() {
    return(
        <section className="hero">
            <img src={photogrid} className='photogrid-el'/>
            <h1 className="hero-header" >Online Experiences</h1>
            <p className="hero-para">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}