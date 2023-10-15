import React from "react"
import './App.css'


export default function Card(props) {
  return (

    <div className="card">
        <a href={props.item.website} target="blank">
            <p><b>{props.item.title}</b></p>
            <img className="cardImg" src={props.item.coverImg} />
            </a>
    </div>
  )
}
