import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [firstDiv, setFirstDiv]=useState(0)
  const [secondDiv, setSecondDiv]=useState(0)
  const [thirdDiv, setThirdDiv]=useState(0)
  const [fourthDiv, setFourthDiv]=useState(0)
  const [fifthDiv, setFifthDiv]=useState(0)
  const [sixthDiv, setSixthDiv]=useState(0)
  const [seventhtDiv, setSeventhtDiv]=useState(0)
  const [eighthDiv, setEighthDiv]=useState(0)
  const [ninthDiv, setNinthDiv]=useState(0)
  const [count, setCount]=useState(2)
  const [show, setShow]=useState(false)
  const [winner, setWinner]=useState("")

  const xSignt ="X"
  const ySignt ="O"
  const compairingO = (firstDiv%2===0&&firstDiv!==0&&secondDiv%2===0&&secondDiv!==0&&thirdDiv%2===0&&thirdDiv!==0)||
  (firstDiv%2===0&&firstDiv!==0&&fourthDiv%2===0&&fourthDiv!==0&&seventhtDiv%2===0&&seventhtDiv!==0)||
  (ninthDiv%2===0&&ninthDiv!==0&&eighthDiv%2===0&&eighthDiv!==0&&seventhtDiv%2===0&&seventhtDiv!==0)||
  (thirdDiv%2===0&&thirdDiv!==0&&sixthDiv%2===0&&sixthDiv!==0&&seventhtDiv%2===0&&seventhtDiv!==0)||
  (fourthDiv%2===0&&fourthDiv!==0&&fifthDiv%2===0&&fifthDiv!==0&&sixthDiv%2===0&&sixthDiv!==0)|| 
  (secondDiv%2===0&&secondDiv!==0&&fifthDiv%2===0&&fifthDiv!==0&&eighthDiv%2===0&&eighthDiv!==0)||
  (firstDiv%2===0&&firstDiv!==0&&fifthDiv%2===0&&fifthDiv!==0&&ninthDiv%2===0&&ninthDiv!==0)||
  (thirdDiv%2===0&&thirdDiv!==0&&fifthDiv%2===0&&fifthDiv!==0&&seventhtDiv%2===0&&seventhtDiv!==0)
  

  const compairingX=(firstDiv%2===1&&firstDiv!==0&&secondDiv%2===1&&secondDiv!==0&&thirdDiv%2===1&&thirdDiv!==0)||
  (firstDiv%2===1&&firstDiv!==0&&fourthDiv%2===1&&fourthDiv!==0&&seventhtDiv%2===1&&seventhtDiv!==0)||
  (ninthDiv%2===1&&ninthDiv!==0&&eighthDiv%2===1&&eighthDiv!==0&&seventhtDiv%2===1&&seventhtDiv!==0)||
  (thirdDiv%2===1&&thirdDiv!==0&&sixthDiv%2===1&&sixthDiv!==0&&seventhtDiv%2===1&&seventhtDiv!==0)||
  (fourthDiv%2===1&&fourthDiv!==0&&fifthDiv%2===1&&fifthDiv!==0&&sixthDiv%2===1&&sixthDiv!==0)||
  (secondDiv%2===1&&secondDiv!==0&&fifthDiv%2===1&&fifthDiv!==0&&eighthDiv%2===1&&eighthDiv!==0)||
  (firstDiv%2===1&&firstDiv!==0&&fifthDiv%2===1&&fifthDiv!==0&&ninthDiv%2===1&&ninthDiv!==0)||
  (thirdDiv%2===1&&thirdDiv!==0&&fifthDiv%2===1&&fifthDiv!==0&&seventhtDiv%2===1&&seventhtDiv!==0)

  useEffect(()=>{
    if(compairingO){
      setShow(true)
      setWinner(ySignt)
    }else if(compairingX){
      setShow(true)
      setWinner(xSignt)
    }else{
      return setShow(false)
    }
  }, [count])

  
  console.log("count", count)
  console.log("firstDiv", firstDiv)
  console.log("secondDiv", secondDiv)
  console.log("thirdDiv", thirdDiv)
  const resetResult=()=>{
    setFirstDiv(0)
    setSecondDiv(0)
    setThirdDiv(0)
    setFourthDiv(0)
    setFifthDiv(0)
    setSixthDiv(0)
    setSeventhtDiv(0)
    setEighthDiv(0)
    setNinthDiv(0)
    setCount(2)
    setShow(false)
    setWinner("") 
  }

  const firstDivClick=()=>{
    if(firstDiv>0){
      return 0
    }else{
      setCount(count+1)
      setFirstDiv(count+1)
    }
    
  }
 
  const secondDivClick=()=>{
    if(secondDiv>0){
      return 0
    }else{
      setCount(count+1)
      setSecondDiv(count+1)
    }
    
  }
  const thirdDivClick=()=>{
    if(thirdDiv>0){
      return 0
    }else{
      setCount(count+1)
      setThirdDiv(count+1)
    }
    
  }
  const fourthDivClick=()=>{
    if(fourthDiv>0){
      return 0
    }else{
      setCount(count+1)
      setFourthDiv(count+1)
    }
  }
  const fifthDivClick=()=>{
    if(fifthDiv>0){
      return 0
    }else{
      setCount(count+1)
      setFifthDiv(count+1)
    }
  }
  const sixtDivClick=()=>{
    if(sixthDiv>0){
      return 0
    }else{
      setCount(count+1)
      setSixthDiv(count+1)
    }
  }
  const seventhtDivClick=()=>{
    if(seventhtDiv>0){
      return 0
    }else{
      setCount(count+1)
      setSeventhtDiv(count+1)
    }
  }
  const eighthDivClick=()=>{
    if(eighthDiv>0){
      return 0
    }else{
      setCount(count+1)
      setEighthDiv(count+1)
    }
  }
  const ninthhDivClick=()=>{
    if(ninthDiv>0){
      return 0
    }else{
      setCount(count+1)
      setNinthDiv(count+1)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
       <section>
        <div onClick={firstDivClick}>{firstDiv===0?null:(firstDiv%2===1?"x":"o")}</div>
        <div onClick={secondDivClick}>{secondDiv===0?null:(secondDiv%2===1?"x":"o")}</div>
        <div onClick={thirdDivClick}>{thirdDiv===0?null:(thirdDiv%2===1?"x":"o")}</div>
        <div onClick={fourthDivClick}>{fourthDiv===0?null:(fourthDiv%2===1?"x":"o")}</div>
        <div onClick={fifthDivClick}>{fifthDiv===0?null:(fifthDiv%2===1?"x":"o")}</div>
        <div onClick={sixtDivClick}>{sixthDiv===0?null:(sixthDiv%2===1?"x":"o")}</div>
        <div onClick={seventhtDivClick}>{seventhtDiv===0?null:(seventhtDiv%2===1?"x":"o")}</div>
        <div onClick={eighthDivClick}>{eighthDiv===0?null:(eighthDiv%2===1?"x":"o")}</div>
        <div onClick={ninthhDivClick}>{ninthDiv===0?null:(ninthDiv%2===1?"x":"o")}</div>
       </section>
       {show&&<article>
                <p>Won {winner}!</p>
                <button onClick={resetResult}>Reset</button>
              </article>}
      </header>
      
    </div>
   
  );
}

export default App;
