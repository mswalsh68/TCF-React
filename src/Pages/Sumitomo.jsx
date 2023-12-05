import React from 'react'
import '../App.css'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import SumitomoData from '../Data/SumitomoData';
import Card from '../Components/Card'


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

    
    </div>
  )
}