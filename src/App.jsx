import React from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Pages/Home'
import WhereToBuy from './Pages/WhereToBuy'
import About from './Pages/About'
import MarketsServed from './Pages/MarketsServed'
import 'bootstrap/dist/css/bootstrap.min.css'
import OCC from './Pages/OCC'
import Sumitomo from './Pages/Sumitomo'
import TrendNetworks from './Pages/TrendNetworks'
import GigOptics from './Pages/GigOptics'
import TCFlogo from './images/TCF-MainLogo.png'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import ThankYou from './Pages/ThankYou'
import Footer from './Components/Footer'
import Contact from './Components/Contact'

export default function App() {
  return (

    <div>

    <Navbar className="navbar" expand="md">
        <div className="container">

            <Navbar.Toggle  data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-label="Expand Navigation">
                    <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse  id="nav">
                <Nav >
                    <Nav.Link >
                        <Link to='/' >Home</Link>
                    </Nav.Link>

                    <NavDropdown  title="Manufacturers"> 
                        <NavDropdown.Item >
                                <Link to='/OCC'> OCC </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                                <Link to='/Sumitomo'> Sumitomo </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                                <Link to='/TrendNetworks'> Trend Networks </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item >
                                <Link to='/GigOptics'> Gig Optics </Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                      <Nav.Link>
                        <Link to='/WhereToBuy'> Where to Buy </Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/About'>About</ Link>
                    </Nav.Link>

                    <Nav.Link>
                        <Link to='/MarketsServed'>Markets Served</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </div>

    </Navbar>

    <div className="mainLogo">
        <img src={TCFlogo} alt="TCF-MainLogo"></img>

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
            <Route path='/ThankYOu' element={<ThankYou />} />
        </Routes>

        <Contact />
        <Footer />
  </div>
  )
}
