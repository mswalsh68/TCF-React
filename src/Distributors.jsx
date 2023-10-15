import React from 'react'
import './App.css'




export default function Manufacturers(props) {


  return (

    
    <div className='card'>
    <a target="_blank" href={props.item.website}>    
        <img className="cardImg" src={props.item.coverImg} />
        </a>
    </div>
    
  )
}


