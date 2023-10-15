import React from 'react'
import './App.css'
import DistributorData from './DistributorData'
import Distributors from './Distributors'
import Contact from './Contact'


import Footer from './Footer'

export default function Home() {

  const distributorElements = DistributorData.map(item => {
    return <Distributors
                  key={item.id}
                  item={item}
            />
  })

  return (
    <div>
      
      <div className="sectionSplit">
        <h2><b>Our Manufacturers</b></h2>
    </div>

    <div className="wrapper">
        {distributorElements}
    </div>
    

    <Contact />
    <Footer />

    </div>
  )
}
