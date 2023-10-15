import React from 'react'
import './App.css'




export default function Customers(props) {


  return (

    
    <div className='card'>
        <img className="cardImg" src={props.item.coverImg} />
    </div>
    
  )
}


