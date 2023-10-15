import React from 'react'
import './App.css'
import Contact from './Contact'
import Footer from './Footer'
import SumitomoData from './SumitomoData';
import Card from './Card'


export default function Sumitomo() {
  
  const featuredProducts = SumitomoData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    />
  })
  
  return (
    <div>
        <div className="sectionSplit">
            <h2>Sumitomo</h2>
        </div>

        <div className="wrapper">
          {featuredProducts}
        </div>

        <Contact />
        <Footer />
    </div>
  )
}