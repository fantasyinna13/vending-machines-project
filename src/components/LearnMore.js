import React from 'react'
import coffee from '../assets/coffee.jpg';

export default function LearnMore() {
  return (
    <div>
    <figure className="card">
        <img src={coffee} alt="" className="card_image"/>
        <figcaption className="card_body">
    <h2 className="card_title">title</h2>
    <p className="card_description">description</p>
        </figcaption>
    </figure>
    
    </div>
  )
}
