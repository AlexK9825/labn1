import logo from './logo.svg';
import './App.css';
import Count from './components/Count'
import React, {useState} from 'react'
import {Button} from "antd";
import 'antd/dist/antd.css'
 
function App() {

  let [count, setCount] = useState(0)

  return(
    <>
       <Count count = {count}/>
       <Button type="primary" onClick={ () => setCount(++count)} danger>
         UP
       </Button>
       <br />
       <br />
       <Button type="primary" onClick={ () => setCount(--count)} danger>
         DOWN
       </Button>
    </>
  );
}

export default App;
