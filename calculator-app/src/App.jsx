import { useState } from 'react'
import './App.css'
import Buttons from './Components/Buttons'
import Display from './Components/Display.jsx'

function App() {
  const [val, setVal] = useState(0);
  const [exp, setExp] = useState("");

  function inputhandler(e) {
    console.log(e.target)
    if (!isNaN(e.target.innerHTML) || e.target.innerHTML == "DEL" || e.target.innerHTML == "AC" || e.target.innerHTML == "+" || e.target.innerHTML == "-"
    || e.target.innerHTML == "*" || e.target.innerHTML == "/" || e.target.innerHTML == "=") {
      switch (e.target.innerHTML) {
        case "+":
          setExp(exp + val + "+");
          setVal()
          break;
        case "-":
          setExp(exp + val + "-");
          setVal()
          break;
        case "*":
          setExp(exp + val + "*");
          setVal()
          break;
        case "/":
          setExp(exp + val + "/");
          setVal()
          break;
        case "=":
          setVal(eval(exp + val))
          setExp("");
          break;
        case "AC":
          setVal();
          setExp("");
          break;
        case "DEL":
          if (val.length > 0) {
            let newVal = val.slice(0, -1);
            setVal(newVal);
          }
          break;

        default:
          setVal((val == "0" || isNaN(val)) ? e.target.innerHTML : val + e.target.innerHTML);
      }
    }
  }


  return (
    <>
      <div className='container'>
        <div>
          <h1>Calculator</h1>
        </div>
        <Display one={val} two={exp} />
        <Buttons inputHandler={inputhandler} />
      </div>
    </>
  )
}

export default App



