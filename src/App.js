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
  return (
    <div className="App">
      <h1>Item List</h1>
      <button onClick={clickHandler}>Click Me</button>
      {item.map((e) =>(
        <div key={e.id}>
          <li>{e.title}</li>
        </div>
      ))}
    </div>
  )
}

export default App;
