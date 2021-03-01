import logo from './logo.svg';
import './App.css';
import Count from './components/Count'
import React, {useState} from 'react'

function App() {

  let [count, setCount] = useState(0)

  console.log(count)
  return(
    <>
       <Count count={count}/>
       <div className='buttonRed' onClick={()=>setCount(++count)}>UP</div>
       <div className='buttonBlue' onClick={()=>setCount(--count)}>DOWN</div>
    </>
  );
}

export default App;
