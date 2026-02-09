import { useState } from 'react'
import Viewer from './components/Viewer'
import InputController from './components/InputController'

import './App.css'

function App() {
  const [count, setCount] = useState(0);


    const onClick = (num1,num2,operator)=>{
      let sum = 0;
      switch (operator) {
        case '+':
          sum = parseInt(num1) + parseInt(num2);
          break;
        case '-':
          sum = parseInt(num1) - parseInt(num2);
          break;
        case '*':
          sum = parseInt(num1) * parseInt(num2);
          break;
        case '/':
          sum = parseInt(num1) / parseInt(num2);
          break;
      }
      setCount(sum)
      
    }
    
  return (
    <>
      <div className="App">
        <div>
          <h1>계산기</h1>
        </div>
        
        <div className="Viewer">
          <Viewer count = {count}  />
        </div>
        
        <div className="InputController">
          <InputController onClick = {onClick}/>
        </div>
      </div>
    </>
  )
}

export default App
