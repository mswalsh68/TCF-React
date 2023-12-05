import React from 'react'
import '../App.css'
import OCCData from '../Data/OCCData';
import Card from '../Components/Card'


export default function OCC() {
  
  const featuredProducts = OCCData.map(item =>{
    return <Card 
    key={item.key}
    item={item}
    />
  })
  
  return (
    <div>
        <div className="sectionSplit">
            <h2>Optical Cable Corporation</h2>
        </div>

        <div className="wrapper">
          {featuredProducts}
        </div>

    </div>
  )
}
