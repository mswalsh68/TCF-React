import React from 'react'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import GigData from './GigData';
import Card from './Card'


export default function GigOptics() {
  
  const featuredProducts = GigData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    />
  })
  
  return (
    <div>
        <div className="sectionSplit">
            <h2>Gig Optics</h2>
        </div>

        <div className="wrapper">
          {featuredProducts}
        </div>

        <Contact />
        <Footer />
    </div>
  )
}
