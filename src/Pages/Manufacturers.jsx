import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import '../App.css'
import OCC from './OCC'
import Sumitomo from './Sumitomo'
import TrendNetworks from './TrendNetworks'
import GigOptics from './GigOptics'





export default function Manufacturers(props) {


  return (

    
    <div className='card'>
      <Link to={props.item.route}>
              <p><b>{props.item.title}</b></p>
              <img className="cardImg" src={props.item.coverImg} />
      </Link>


      <Routes>
          <Route path='/OCC' element={<OCC />} />
          <Route path='/Sumitomo' element={<Sumitomo />} />
          <Route path='/Trend Networks' element={<TrendNetworks />} />
          <Route path='/Gig Optics' element={<GigOptics />} />
  
      </Routes>
    </div> 
  )
}


