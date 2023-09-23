import React from 'react'

export default function card({item}) {
  return (
      <div className='card'>   
       <img className='img_item' src={item.img} alt="not-found"></img>
       <p>{item.name}</p>
       <p>Gia: <span>{item.price}</span></p>
        <button>Mua hang</button>
    </div>
  )
}
