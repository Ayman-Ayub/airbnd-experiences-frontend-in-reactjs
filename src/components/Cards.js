import React from 'react'
import img4 from '../img/Star 1.png'
const Cards = (props) => {
  return (
    <section className='card-container'>
    <div className='card'>
      <img src={props.img} alt="" className='card--image'/>
<div className="card--stats">
    <img src={img4} alt="" className='card--star'/>
    <span>{props.rating}</span>
    <span className='gray'>({props.reviewCount}) . </span>
    <span className='gray'>{props.country}</span>
</div>
<p>{props.title}</p>
<p><span className='bold'>from ${props.price} </span>/ person</p>

    </div>
    </section>
  )
}

export default Cards
