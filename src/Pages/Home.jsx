import React from 'react'
import '../App.css'
import ManufacturerData from '../Data/ManufacturerData'
import Manufacturers from './Manufacturers'
import Customers from '../Components/Customers'
import CustomerData from '../Data/CustomerData'

export default function Home() {

  const manufacturerElements = ManufacturerData.map(item => {
    return <Manufacturers
                  key={item.id}
                  item={item}
            />
  })

  const customerElements = CustomerData.map(item => {
    return <Customers
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
        {manufacturerElements}
    </div>
    

    <div className="sectionSplit">
        <h2><b>A Few of Our Customers</b></h2>
    </div>

    <div className="wrapper">
        {customerElements}
    </div>    


    </div>
  )
}
