import './App.css';
import React from 'react'

function App() {
  let [item,setItem] = React.useState([]);
  const clickHandler = () =>{
    setItem([
    {title:"green", id:1},
    {title:"demonic", id:2},
    {title:"thunder", id:3},
    {title:"ice", id:4}
    ])
  }
  const removeItem = (id) =>{
    return setItem((prevItem)=>
      prevItem.filter((i) => {
        return i.id !== id;
    }))
  }
  return (
    <div className="App">
      <h1>Item List</h1>
      <button onClick={clickHandler}>Click Me</button>
      {item.map((e) =>(
        <div key={e.id}>
          <li>{e.title}</li>
          <button onClick={() => removeItem(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default App;
