import React from 'react'
import '../App.css'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import TrendData from '../Data/TrendData';
import Card from '../Components/Card'


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

       
    </div>
  )
}
