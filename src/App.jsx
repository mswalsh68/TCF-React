import React from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import WhereToBuy from './WhereToBuy'
import About from './About'
import MarketsServed from './MarketsServed'
import 'bootstrap/dist/css/bootstrap.min.css'
import OCC from './OCC'
import Sumitomo from './Sumitomo'
import TrendNetworks from './TrendNetworks'
import GigOptics from './GigOptics'

export default function App() {
  return (

    <div>
      
    <div className="navbar navbar-expand-md">
        <div className="container">
            
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/' href="" class="nav-link">Home</Link>
                    </li>

                      <li className="nav-item">  
                        <Link to='/WhereToBuy' className="nav-link"> Where to Buy </Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/About' className="nav-link">About</ Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/MarketsServed' className="nav-link">Markets Served</Link>
                    </li>
                </ul>
            </div>  

        </div> 

    </div>    

    <div className="mainLogo">
        <img src="./public/images/TCF-MainLogo.png" alt="TCF-MainLogo"></img>

        <h1>The Connectivity Firm, inc</h1>
    </div>
        
    <div className="headline">
        <div className="tagline">
        <h5><b>Since 2001, The Connectivity Firm inc has been supplying the low voltage communication markets with world class fiber, copper cable, and connectivity product solutions to all communication markets.</b></h5></div>
    </div>


  


    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/WhereToBuy' element={<WhereToBuy />} />
            <Route path='/About' element={<About />} />
            <Route path='/MarketsServed' element={<MarketsServed />} />
            <Route path='/OCC' element={<OCC />} />
            <Route path='/Sumitomo' element={<Sumitomo />} />
            <Route path='/TrendNetworks' element={<TrendNetworks />} />
            <Route path='/GigOptics' element={<GigOptics />} />
        </Routes>


  </div>  
  )
}
