import './App.css';
import React from 'react'
import Title from './components/Title'

export default function App() {
  let [show,setShow] = React.useState(false);
  let [item,setItem] = React.useState([
    {title:"green", id:1},
    {title:"demonic", id:2},
    {title:"thunder", id:3},
    {title:"ice", id:4}
    ]);
  const removeItem = (id) =>{
    return setItem((prevItem)=>
      prevItem.filter((i) => {
        return i.id !== id; 
    }))
  }
  return (
    <div className="App">
      <Title title="Listings" subtitle="Delete unnecessary items" />
      <button className='btn' onClick={()=>setShow(!show)}>Toggle</button>
      {show && item.map((e) =>(
        <div className='box' key={e.id}>
          <li>{e.title}</li>
          <button className='btn delete' onClick={() => removeItem(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}