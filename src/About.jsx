import React from 'react'
import Footer from './Footer'
import Contact from './Contact'
import './App.css'





export default function About() {
  return (
    <div>

<div className="sectionSplit">
        <h2><b>About Us</b></h2>
    </div>

    <div className="info">
        <p>Established in September of 2001, The Connectivity Firm currently serves the State of Florida and the Caribbean
            markets as professional, technical, sales, and
            marketing resource for the Communications, Security, Life Safety, Network and Automation markets.
        </p>
        <p>
            TCF actively and regularly conducts technical training and product related seminars with design consultants, contractors, distributors, and end users on IT, security trends, technology updates, and available services, or products from numerous regulatory agencies, such as BICSI, ASIS, UL, and EIA/TIA. Our collective experience allows us to assist with user strategies for local, metropolitan, wide area and security networks for clients such as Walt Disney World, University of South Florida, Motorola, and Progress Energy, just to name a few.
        </p>
        <p>
            Our purpose is to be the best resource for knowledge of emerging standards, and technology improvements available to assist our customers with the selection of their next generation technologies. We accomplish this by specification of the proper infrastructures and products that provide cost effective solutions as this global business community implements the comprehensive high-speed systems of tomorrow.
        </p>

    </div>

    <Contact />
    <Footer />

    </div>
  )
}
            