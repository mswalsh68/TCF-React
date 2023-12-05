import React from 'react'
import '../App.css'
import DistributorData from '../Data/DistributorData'
import Distributors from '../Components/Distributors'

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
        <h2><b>Distribution Partners</b></h2>
    </div>

    <div className="wrapper">
        {distributorElements}
    </div>
    


    </div>
  )
}
