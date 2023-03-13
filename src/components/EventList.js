import React from 'react'
import './eventlist.css'

export default function EventList({item,remove}) {
  return (
    <div>
        {item.map((e) =>(
        <div className='box' key={e.id}>
          <li>{e.title}</li>
          <button className='btn delete' onClick={() => remove(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}
