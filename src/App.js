import './App.css';
import React from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList';

export default function App() {
  let [modal, changeModal] = React.useState(false);
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
      <button className='btn' onClick={()=> changeModal(true)}>Show Modal</button>
      {show && <EventList item={item} remove={removeItem}/>}
    {modal && <Modal >
        <h2>
          Humanity is Dead
        </h2>
        <h2>
          Blood is Fuel
        </h2>
        <h2>
          Hell is Full
        </h2>
        <button onClick={() => changeModal(false)}>Close</button>
    </Modal>}
    </div>
  )
}