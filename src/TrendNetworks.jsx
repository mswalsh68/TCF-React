import React from 'react'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import TrendData from './TrendData';
import Card from './Card'


export default function TrendNetworks() {
  
  const featuredProducts = TrendData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    />
  })
  
  return (
    <div>
        <div className="sectionSplit">
            <h2>Trend Networks</h2>
        </div>

        <div className="wrapper">
          {featuredProducts}
        </div>

        <Contact />
        <Footer />
    </div>
  )
}
